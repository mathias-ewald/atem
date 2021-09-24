IN=$1
OUT=$2

ffmpeg -i $IN \
   -codec:v prores_ks \
   -profile:v 4 \
   -vendor apl0 \
   -bits_per_mb 8000 \
   -pix_fmt yuva444p10le \
   -filter:v fps=25 \
   $OUT.mov
