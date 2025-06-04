from PIL import Image

img = Image.open("./ajt-app/public/PNGs/LI.png").convert("RGBA")
pixels = img.load()


new_color = (0xFA, 0xFA, 0xFA, 0x20)

width, height = img.size
for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        if (r, g, b, a) != (0, 0, 0, 255):
            pixels[x, y] = new_color

# Save result
img.save("./ajt-app/public/PNGs/LI_edit.png")
