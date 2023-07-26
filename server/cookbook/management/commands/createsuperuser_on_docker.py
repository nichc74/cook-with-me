from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

class Command(BaseCommand):
    help = 'Create a superuser when Docker container starts.'

    def handle(self, *args, **options):
        if not User.objects.filter(username='leviathan').exists():
            User.objects.create_superuser('leviathan', '', 'h3_needs_Th3_@xe')
            self.stdout.write(self.style.SUCCESS('Superuser created successfully!'))
        else:
            self.stdout.write(self.style.WARNING('Superuser already exists. Skipped creation.'))
