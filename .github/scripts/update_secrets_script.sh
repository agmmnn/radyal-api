#!/bin/bash
### NisanyanSozluk.com
html=$(curl -s "https://www.nisanyansozluk.com/kelime/ab")
js_name=$(echo "$html" | grep -oE '%5Bname%5D-(\w+)\.js')
js_name=$(curl -s "https://www.nisanyansozluk.com/_next/static/chunks/pages/kelime/$js_name")
js_app=$(echo "$html" | grep -oE '_app-[a-z0-9]{16}\.js')
js_app=$(curl -s "https://www.nisanyansozluk.com/_next/static/chunks/pages/$js_app")

if [[ $js_name =~ AES\.decrypt\(e,\s*\"([^\"]+)\"\) ]]; then
  nis_name_secret=$(echo ${BASH_REMATCH[1]} | sed 's/"/\\"/g')
  echo "nis_name_secret: $nis_name_secret"
else
  echo "Match not found"
fi

if [[ $js_app =~ encryptionSecret:\s*([\"\'])(.{30}) ]]; then
  nis_app_secret=$(echo ${BASH_REMATCH[2]} | sed 's/"/\\"/g')
  echo "nis_app_secret: $nis_app_secret"
else
  echo "Match not found"
fi

### NisanyAnadlar.com
html=$(curl -s "https://www.nisanyanadlar.com/isim/G%C3%B6k%C3%A7e")
js_name=$(echo "$html" | grep -oE '%5Bname%5D-(\w+)\.js')
js_name=$(curl -s "https://www.nisanyanadlar.com/_next/static/chunks/pages/isim/$js_name")
js_app=$(echo "$html" | grep -oE '_app-[a-z0-9]{16}\.js')
js_app=$(curl -s "https://www.nisanyanadlar.com/_next/static/chunks/pages/$js_app")

if [[ $js_name =~ AES\.decrypt\(\w+,\s*\"([^\"]+)\"\) ]]; then
  nisad_name_secret=$(echo ${BASH_REMATCH[1]} | sed 's/"/\\"/g')
  echo "nisad_name_secret: $nisad_name_secret"
else
  echo "Match not found"
fi

if [[ $js_app =~ encryptionSecret:\s*([\"\'])(.{30}) ]]; then
  nisad_app_secret=$(echo ${BASH_REMATCH[2]} | sed 's/"/\\"/g')
  echo "nisad_app_secret: $nisad_app_secret"
else
  echo "Match not found"
fi

if [[ $html =~ _next\/static\/([^\/]*)\/_buildManifest\.js ]]; then
  nisad_url_sub=${BASH_REMATCH[1]}
  echo "nisad_url_sub: $nisad_url_sub"
else
  echo "Match not found"
fi

json='{
  "nis_name_secret": "'"$nis_name_secret"'",
  "nis_app_secret": "'"$nis_app_secret"'",
  "nisad_name_secret": "'"$nisad_name_secret"'",
  "nisad_app_secret": "'"$nisad_app_secret"'",
  "nisad_url_sub": "'"$nisad_url_sub"'"
}'

# Save the JSON object to a file
echo "$json" > api/_secrets.json