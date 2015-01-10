all:
	make geojson
	make topojson

server:
	python -m SimpleHTTPServer 8880

geojson:
	rm -f nynta.json
	ogr2ogr \
		-a_srs EPSG:2263 \
		-t_srs EPSG:4326 \
		-f GeoJSON \
		nynta.json \
		nynta.shp

topojson:
	rm -f nynta.topojson
	topojson -o nynta.topojson \
	nynta.json


