FILES=$@

for FILE in $FILES; do
  FULL=$(basename -- "$FILE")
  DIR=$(dirname -- "$FILE")
  EXT="${FULL##*.}"
  NAME="${FULL%.*}"
  
  IN=$FULL
  OUT=$DIR/$NAME.mov


  if [ -f $OUT ]; then
    echo "Skipping $IN. Already exists."
    continue
  fi

  echo "Converting $IN => $OUT"

  ffmpeg -i $IN \
     -codec:v prores_ks \
     -profile:v 3 \
     -vendor apl0 \
     -bits_per_mb 8000 \
     -filter:v fps=25 \
     $OUT
done
