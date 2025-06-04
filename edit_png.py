from PIL import Image

img = Image.open("./ajt-app/public/PNGs/uiuc1.png").convert("RGBA")
pixels = img.load()


new_color = (0xFA, 0xFA, 0xFA, 0x00)
new_color2 = (0x00, 0x00, 0x00, 0xfa)

width, height = img.size
for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        if r*g*b > 30**3:
            pixels[x, y] = new_color
        else:
            pixels[x, y] = new_color2
        #     continue
        # if r > 20 + g and r > 20 + b:
        #     pixels[x, y] = (0x00, 0x00, 0x00, 0xFF)
        # else:
        #     pixels[x, y] = (r, g, b, 0x3a)

# Save result
img.save("./ajt-app/public/PNGs/uiuc1_edit.png")
