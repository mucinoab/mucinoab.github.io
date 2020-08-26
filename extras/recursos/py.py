import pandas as pd
import folium

datos= open("./countries.geojson")
data = pd.read_csv("./datos.csv")
m = folium.Map(location=[15, -102], zoom_start=3)
folium.Choropleth(
    geo_data=datos.read(),
    name='choropleth',
    data=data,
    bins=[0, 1000, 10100000, 1000000, 2000000],
    columns=['Country', 'Deaths'],
    key_on='feature.properties.name',
    fill_color='YlOrRd',
    fill_opacity=0.7,
    line_opacity=0.9,
    smooth_factor=2,
    nan_fill_color='gray',
    line_weight=2,
    highlight=True,
    legend_name= 'Casos al 6 de Junio 2020'
).add_to(m)

folium.LayerControl().add_to(m)

m.save("index.html")

