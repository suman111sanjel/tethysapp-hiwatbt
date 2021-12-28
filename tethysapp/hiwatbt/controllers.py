from django.shortcuts import render
from tethys_sdk.permissions import login_required
from tethys_sdk.gizmos import Button
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from django.http import JsonResponse

import json
from .utils import  get_thredds_info


def home(request):
    context = {
    }
    return render(request, 'hiwatbt/HIWATExtreme.html', context)


@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def getLatestHIWATInfo(request):

    thredds_wms_obj = get_thredds_info()

    context = {
        'thredds_urls': thredds_wms_obj,
    }
    return JsonResponse(context)