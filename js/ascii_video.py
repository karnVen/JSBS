import cv2
import os

VIDEO_PATH = "your_video.mp4"
OUTPUT_DIR = "frames"

if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

# Open the video file
cap = cv2.VideoCapture(VIDEO_PATH = r"D:\SEM-3\js\your_video.mp4"
)
frame_num = 0

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    cv2.imwrite(f"{OUTPUT_DIR}/frame_{frame_num:04d}.jpg", frame)
    frame_num += 1

cap.release()
print(f"Extracted {frame_num} frames to {OUTPUT_DIR}")







import ascii_magic
import os

INPUT_DIR = "frames"
HTML_DIR = "ascii_html"

if not os.path.exists(HTML_DIR):
    os.makedirs(HTML_DIR)

for frame_file in sorted(os.listdir(INPUT_DIR)):
    if frame_file.endswith(".jpg"):
        img_path = os.path.join(INPUT_DIR, frame_file)
        output_path = os.path.join(HTML_DIR, frame_file.replace(".jpg", ".html"))
        output = ascii_magic.from_image_file(img_path, mode=ascii_magic.Modes.HTML_COLOR)
        ascii_magic.to_file(output, output_path)
