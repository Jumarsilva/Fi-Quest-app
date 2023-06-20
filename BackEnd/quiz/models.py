from django.db import models
from uuid import uuid4

class Questions(models.Model):
    id_question = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    question = models.CharField(max_length=255)
    options = models.TextField()
    answer = models.CharField(max_length=255)
    tip = models.CharField(max_length=255)

    def get_options_list(self):
        return self.options.split(';')

    def set_options_list(self, options_list):
        self.options = ';'.join(options_list)
