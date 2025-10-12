import requests
import os
from pathlib import Path

# Directories
images_dir = Path("apps/web/public/images")
payment_dir = images_dir / "payment"
products_dir = images_dir / "products"
lifestyle_dir = images_dir / "lifestyle"
categories_dir = images_dir / "categories"

# Gratis e-scooter en lifestyle foto's van Unsplash/Pexels
escooter_images = [
    {
        "url": "https://images.pexels.com/photos/7241438/pexels-photo-7241438.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "name": "electric-scooter-city-1.jpg",
        "folder": products_dir
    },
    {
        "url": "https://images.pexels.com/photos/7241439/pexels-photo-7241439.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "name": "electric-scooter-city-2.jpg",
        "folder": products_dir
    },
    {
        "url": "https://images.pexels.com/photos/12491087/pexels-photo-12491087.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "name": "escooter-lifestyle-1.jpg",
        "folder": lifestyle_dir
    },
    {
        "url": "https://images.pexels.com/photos/7241437/pexels-photo-7241437.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "name": "escooter-lifestyle-2.jpg",
        "folder": lifestyle_dir
    },
    {
        "url": "https://images.pexels.com/photos/9533903/pexels-photo-9533903.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "name": "escooter-urban.jpg",
        "folder": lifestyle_dir
    },
    {
        "url": "https://images.pexels.com/photos/13188361/pexels-photo-13188361.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "name": "electric-bike-city.jpg",
        "folder": categories_dir
    },
]

# Payment icons SVG (Simple text-based payment logos)
payment_icons = {
    "ideal": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><defs><style>.cls-1{fill:#cc0066;}</style></defs><path class="cls-1" d="M96,0A96,96,0,1,0,192,96,96,96,0,0,0,96,0Zm0,176A80,80,0,1,1,176,96,80.09,80.09,0,0,1,96,176Z"/><path class="cls-1" d="M59.44,74.88h8.8v42.24h-8.8Z"/><path class="cls-1" d="M85.84,74.88c9.92,0,17.92,4.96,22.72,12.96l-7.04,5.12c-3.52-5.6-8.8-9.28-15.68-9.28-11.52,0-19.84,8.96-19.84,20.32s8.32,20.32,19.84,20.32c6.88,0,12.16-3.68,15.68-9.28l7.04,5.12c-4.8,8-12.8,12.96-22.72,12.96-15.68,0-28.48-12.16-28.48-29S70.16,74.88,85.84,74.88Z"/><path class="cls-1" d="M122.56,74.88c9.92,0,17.92,4.96,22.72,12.96l-7.04,5.12c-3.52-5.6-8.8-9.28-15.68-9.28-11.52,0-19.84,8.96-19.84,20.32s8.32,20.32,19.84,20.32c6.88,0,12.16-3.68,15.68-9.28l7.04,5.12c-4.8,8-12.8,12.96-22.72,12.96-15.68,0-28.48-12.16-28.48-29S106.88,74.88,122.56,74.88Z"/></svg>''',
    
    "visa": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32"><rect width="48" height="32" rx="4" fill="#1434CB"/><path d="M20.2 11.6h-3.4l-5.3 13h3.5l1.1-2.9h3.9l.4 2.9h3.2l-3.4-13zm-3.2 8l1.5-4.4.9 4.4h-2.4zm11.9-8l-2.9 13h3.2l2.9-13h-3.2zm9.5 0h-2.6l-4 13h3.3l.8-2.1h3.7l.4 2.1h2.9l-4.5-13zm-.8 8.6l1.5-4.1.7 4.1h-2.2z" fill="#FFF"/></svg>''',
    
    "mastercard": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32"><rect width="48" height="32" rx="4" fill="#EB001B"/><circle cx="19" cy="16" r="10" fill="#F79E1B"/><circle cx="29" cy="16" r="10" fill="#FF5F00" opacity=".7"/></svg>''',
    
    "paypal": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32"><rect width="48" height="32" rx="4" fill="#003087"/><path d="M18.3 11.5c.2-1.5-.1-2.5-.8-3.3-.8-.9-2.3-1.2-4.2-1.2H8.9c-.4 0-.8.3-.8.7L6 23.4c0 .3.2.5.5.5h3.2l.8-5.1-.1.3c.1-.4.5-.7.9-.7h1.9c3.7 0 6.6-1.5 7.5-5.9 0-.1 0-.3.1-.5-.1 0-.1 0 0-.5zm-1.2 5.8c-.5 2.3-2 3.8-5.1 3.8h-1.3c-.3 0-.6.2-.6.5l-.7 4.4c0 .2.1.4.3.4h2.4c.3 0 .6-.2.6-.6v-.1l.5-2.9v-.2c0-.3.3-.6.6-.6h.4c2.7 0 4.8-1.1 5.4-4.3.3-1.3.1-2.4-.6-3-.2-.2-.5-.4-.9-.4z" fill="#FFF"/><path d="M17.1 11c-.1 0-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.4 0-.8-.1-1.3-.1h-4c-.1 0-.2 0-.3.1-.2.1-.3.2-.4.4l-1 6.2v.2c.1-.4.5-.7.9-.7h1.9c3.7 0 6.6-1.5 7.5-5.9 0-.1 0-.3.1-.5-.2-.1-.4-.2-.6-.3-.4-.1-.8-.2-1.2-.2z" fill="#009CDE"/></svg>''',
}

def download_image(url, filepath):
    """Download een plaatje van een URL"""
    try:
        response = requests.get(url, stream=True, timeout=30)
        response.raise_for_status()
        
        with open(filepath, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        
        print(f"✓ Downloaded: {filepath.name}")
        return True
    except Exception as e:
        print(f"✗ Failed to download {filepath.name}: {e}")
        return False

def main():
    print("🎨 Downloading images for webshop...\n")
    
    # Download e-scooter images
    print("📸 Downloading e-scooter and lifestyle photos...")
    for img in escooter_images:
        filepath = img["folder"] / img["name"]
        download_image(img["url"], filepath)
    
    # Create payment icons
    print("\n💳 Creating payment icons...")
    for name, svg_content in payment_icons.items():
        filepath = payment_dir / f"{name}.svg"
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(svg_content)
        print(f"✓ Created: {name}.svg")
    
    print("\n✅ Done! All images downloaded.")

if __name__ == "__main__":
    main()

