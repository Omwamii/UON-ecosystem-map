from django.db import models

class Location(models.Model):
    name = models.CharField(max_length=50)
    latitude = models.DecimalField(max_digits=18, decimal_places=15)
    longitude = models.DecimalField(max_digits=18, decimal_places=15)
    icon = models.ImageField(upload_to='icons/')

class Office(models.Model):
    occupants = models.CharField(max_length=255)
    latitude = models.DecimalField(max_digits=18, decimal_places=15)
    longitude = models.DecimalField(max_digits=18, decimal_places=15)
    floor = models.CharField(max_length=255)
    department = models.CharField(max_length=255)

    def __str__(self):
        return f"Office is on {self.floor} floor"
