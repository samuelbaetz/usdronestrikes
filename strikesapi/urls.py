from django.urls import include, path
from django.urls.resolvers import URLPattern
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'Strikedata', views.StrikeViewSet)
router.register(r'CommanderinChief', views.PresidentViewSet)
router.register(r'StrikesByYear', views.YearViewSet)
router.register(r'Contributedata', views.ContribViewSet)
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]