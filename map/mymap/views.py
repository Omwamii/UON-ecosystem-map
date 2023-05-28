from django.shortcuts import render, get_list_or_404
from .models import Location
from .models import Office
from django.http import JsonResponse
from django.core.serializers import serialize
from decimal import Decimal, InvalidOperation
from django.db.models import Q
from django.views.decorators.csrf import csrf_exempt


def index(request):
    """ return default map """
    return render(request, "mymap/index.html")

def display(request):
    """ returns all locations in database to be displayed"""
    locations = Location.objects.all().values()
    return JsonResponse(list(locations), safe=False)

def search_room(request):
    if request.method == 'GET':
        query = request.GET.get('query', '')
        inputs = query.split(',')

        if len(inputs) == 2:
            lecturer_name = inputs[0].strip()
            department = inputs[1].strip()
            offices = Office.objects.filter(Q(occupants__icontains=lecturer_name) & Q(department__icontains=department))
        elif len(inputs) == 1:
            keyword = inputs[0].strip()
            offices = Office.objects.filter(Q(occupants__icontains=keyword) | Q(department__icontains=keyword))
        else:
            offices = Office.objects.none()
        results = list(offices.values())
        return JsonResponse({'results': results})
    else:
        return JsonResponse({'error': 'Invalid request method.'})
