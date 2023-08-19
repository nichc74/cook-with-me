import cloudinary.uploader
from settings import cloudinary_config

cloudinary_config

DEFAULT_FOLDER = "cook_with_me"

def upload(file):
    try:
        response = cloudinary.uploader.upload(file, folder=DEFAULT_FOLDER)
    except:
        print("Error uploading image")
    return response.url

