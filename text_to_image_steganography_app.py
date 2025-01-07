
# Install required libraries
# !pip install streamlit diffusers torch torchvision transformers numpy pillow

import streamlit as st
from diffusers import StableDiffusionPipeline
from PIL import Image
import numpy as np
import torch

# Load the Stable Diffusion pipeline
@st.cache_resource
def load_pipeline():
    pipe = StableDiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5")
    pipe.to("cuda" if torch.cuda.is_available() else "cpu")
    return pipe

# Generate an image from text
def generate_image_from_text(pipe, prompt):
    with st.spinner("Generating image..."):
        result = pipe(prompt, guidance_scale=7.5)
        image = result.images[0]
    return image

# Encode text into an image
def encode_text_in_image(image, secret_text):
    binary_text = ''.join(format(ord(c), '08b') for c in secret_text) + '11111111'
    pixels = np.array(image)
    flat_pixels = pixels.flatten()
    for i, bit in enumerate(binary_text):
        flat_pixels[i] = (flat_pixels[i] & ~1) | int(bit)
    modified_pixels = flat_pixels.reshape(pixels.shape)
    stego_image = Image.fromarray(modified_pixels.astype('uint8'))
    return stego_image

# Decode text from an image
def decode_text_from_image(image):
    pixels = np.array(image)
    flat_pixels = pixels.flatten()
    binary_text = ''.join(str(pixel & 1) for pixel in flat_pixels)
    hidden_message = ''.join(
        chr(int(binary_text[i:i + 8], 2)) for i in range(0, len(binary_text), 8)
    ).split('11111111')[0]
    return hidden_message

# Main Streamlit app
def main():
    st.title("Text-to-Image Steganography Web App")
    st.sidebar.title("Navigation")
    option = st.sidebar.radio("Choose an option", ["Home", "Generate Image", "Embed Secret Text", "Decode Secret Text"])

    if option == "Home":
        st.subheader("Welcome to the Steganography Web App!")
        st.write("""
            This app allows you to:
            - Generate an image from a text prompt using Stable Diffusion.
            - Embed secret messages into images.
            - Decode secret messages from images.
        """)

    elif option == "Generate Image":
        st.subheader("Generate an Image from Text")
        pipe = load_pipeline()

        prompt = st.text_input("Enter a text prompt", "A futuristic cityscape at sunset.")
        if st.button("Generate Image"):
            image = generate_image_from_text(pipe, prompt)
            st.image(image, caption="Generated Image", use_column_width=True)
            image.save("generated_image.png")
            st.success("Image saved as 'generated_image.png'")

    elif option == "Embed Secret Text":
        st.subheader("Embed a Secret Message into an Image")
        uploaded_image = st.file_uploader("Upload an Image (PNG or JPG)", type=["png", "jpg", "jpeg"])
        secret_message = st.text_input("Enter the secret message to hide")

        if st.button("Embed Message"):
            if uploaded_image and secret_message:
                image = Image.open(uploaded_image)
                image = image.convert("RGB")
                stego_image = encode_text_in_image(image, secret_message)
                st.image(stego_image, caption="Stego Image", use_column_width=True)
                stego_image.save("stego_image.png")
                st.success("Stego Image saved as 'stego_image.png'")
            else:
                st.error("Please upload an image and enter a secret message!")

    elif option == "Decode Secret Text":
        st.subheader("Decode a Secret Message from an Image")
        uploaded_image = st.file_uploader("Upload a Stego Image (PNG or JPG)", type=["png", "jpg", "jpeg"])

        if st.button("Decode Message"):
            if uploaded_image:
                image = Image.open(uploaded_image)
                image = image.convert("RGB")
                decoded_message = decode_text_from_image(image)
                st.success(f"Decoded Message: {decoded_message}")
            else:
                st.error("Please upload a stego image!")

if __name__ == "__main__":
    main()
