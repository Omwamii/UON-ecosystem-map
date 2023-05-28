from django.urls import path
from . import views

urlpatterns = [
    # Map /search-locations/ to the search_locations view
    path('', views.index, name="index"),
    path('search/', views.search_room, name='search_room'),
    path('display/', views.display, name='display'),
]

