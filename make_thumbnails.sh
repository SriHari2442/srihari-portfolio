#!/bin/bash
DIR="public/assets/quiet-mode"

# 1. Video poster thumbnail (at 2 seconds into video)
ffmpeg -y -ss 00:00:02 -i "$DIR/quiet-mode-concept.mp4" -vframes 1 -q:v 2 "$DIR/video-poster.jpg"
ffmpeg -y -ss 00:00:02 -i "$DIR/quiet-mode-concept.mp4" -vframes 1 -vf scale=640:-1 "$DIR/video-poster-thumb.webp"

# 2. Screenshots thumbnails
ffmpeg -y -i "$DIR/ux-screenshot-01.png" -vf scale=640:-1 -q:v 80 "$DIR/ux-screenshot-01-thumb.webp"
ffmpeg -y -i "$DIR/ux-screenshot-02.png" -vf scale=640:-1 -q:v 80 "$DIR/ux-screenshot-02-thumb.webp"

ls -lh "$DIR"
