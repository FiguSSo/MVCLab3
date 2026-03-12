from django.http import HttpResponse

def index(request):
    return HttpResponse("Witaj w ankietach! To jest strona główna polls.")