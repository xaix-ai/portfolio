from django.shortcuts import render
from rest_framework import viewsets
from .models import (User, UserProfile, Project, ProjectMedia, Skill, Analytics, EducationalBackground, Certificate,
                     Achievement, SocialLink, Experience, ContactMessage)
from .serializers import (UserSerializer, UserProfileSerializer, ProjectSerializer, ProjectMediaSerializer,
                          SkillSerializer, AnalyticsSerializers, EducationalBackgroundSerializer,
                          CertificateSerializer, AchievementSerializer, SocialLinkSerializer,
                          ExperienceSerializer, ContactMessageSerializer)
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    
class ProjectMediaViewSet(viewsets.ModelViewSet):
    queryset = ProjectMedia.objects.all()
    serializer_class = ProjectMediaSerializer
    
class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    
class AnalyticsViewSet(viewsets.ModelViewSet):
    queryset = Analytics.objects.all()
    serializer_class = AnalyticsSerializers

class EducationalBackgroundViewSet(viewsets.ModelViewSet):
    queryset = EducationalBackground.objects.all()
    serializer_class = EducationalBackgroundSerializer

class CertificateViewSet(viewsets.ModelViewSet):
    queryset = Certificate.objects.all()
    serializer_class = CertificateSerializer
    
class AchievementViewSet(viewsets.ModelViewSet):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer

class SocialLinkViewSet(viewsets.ModelViewSet):
    queryset = SocialLink.objects.all()
    serializer_class = SocialLinkSerializer
    
class ExperienceViewSet(viewsets.ModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer