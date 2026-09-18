from django.contrib import admin
from .models import (
    User, UserProfile, Project, Skill, ProjectMedia, SocialLink, Analytics,
    EducationalBackground, Certificate, Experience, ContactMessage, Achievement
)

admin.site.register(User)
admin.site.register(UserProfile)
admin.site.register(Project)
admin.site.register(Skill)
admin.site.register(ProjectMedia)
admin.site.register(SocialLink)
admin.site.register(Analytics)
admin.site.register(EducationalBackground)
admin.site.register(Certificate)
admin.site.register(Experience)
admin.site.register(Achievement)
admin.site.register(ContactMessage)

# Register your models here.
