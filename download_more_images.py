import requests
import os
from pathlib import Path

# Directories
images_dir = Path("apps/web/public/images")
products_dir = images_dir / "products"
lifestyle_dir = images_dir / "lifestyle"
categories_dir = images_dir / "categories"
benefits_dir = images_dir / "benefits"

# Meer werkende foto URLs van Pexels
more_images = [
    # E-scooter product photos
    {
        "url": "https://images.pexels.com/photos/7241440/pexels-photo-7241440.jpeg?auto=compress&cs=tinysrgb&w=800",
        "name": "scooter-product-1.jpg",
        "folder": products_dir
    },
    {
        "url": "https://images.pexels.com/photos/14891374/pexels-photo-14891374.jpeg?auto=compress&cs=tinysrgb&w=800",
        "name": "scooter-product-2.jpg",
        "folder": products_dir
    },
    {
        "url": "https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg?auto=compress&cs=tinysrgb&w=800",
        "name": "scooter-product-3.jpg",
        "folder": products_dir
    },
    # Lifestyle photos
    {
        "url": "https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "name": "urban-lifestyle.jpg",
        "folder": lifestyle_dir
    },
    {
        "url": "https://images.pexels.com/photos/3817676/pexels-photo-3817676.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "name": "city-mobility.jpg",
        "folder": lifestyle_dir
    },
    # Categories
    {
        "url": "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800",
        "name": "helmet-safety.jpg",
        "folder": categories_dir
    },
    {
        "url": "https://images.pexels.com/photos/163431/box-cardboard-carrying-commerce-163431.jpeg?auto=compress&cs=tinysrgb&w=800",
        "name": "delivery-box.jpg",
        "folder": benefits_dir
    },
]

def download_image(url, filepath):
    """Download een plaatje van een URL"""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, stream=True, timeout=30)
        response.raise_for_status()
        
        with open(filepath, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        
        print(f"✓ Downloaded: {filepath.name}")
        return True
    except Exception as e:
        print(f"✗ Failed: {filepath.name} - {str(e)[:50]}")
        return False

def main():
    print("🎨 Downloading additional images...\n")
    
    success_count = 0
    for img in more_images:
        filepath = img["folder"] / img["name"]
        if download_image(img["url"], filepath):
            success_count += 1
    
    print(f"\n✅ Successfully downloaded {success_count}/{len(more_images)} images!")

if __name__ == "__main__":
    main()

