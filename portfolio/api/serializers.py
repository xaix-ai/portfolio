from rest_framework import serializers
from .models import (
    User, UserProfile, Project, ProjectMedia, Skill, Analytics, EducationalBackground,
    Certificate, Achievement, SocialLink, Experience, ContactMessage
)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'role', 'status', 'created_at', 'update_at']
        # the password_hash is deliberately left out of the fields to avoid exposing it in the API response, nyehehhehehhe

class UserProfileSerializer(serializers.Serializer):
    class Meta:
        model = UserProfile
        fields = '__all__'
        
class ProjectMediaSerializer(serializers.Serializer):
    class Meta:
        model = ProjectMedia
        fields = '__all__'
        
class ProjectSerializer(serializers.Serializer):
    media = ProjectMediaSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = '__all__'
        
class SkillSerializer(serializers.Serializer):
    class Meta:
        model = Skill
        fields = "__all__"

class AnalyticsSerializers(serializers.Serializer):
    class Meta:
        model = Analytics
        fields = '__all__'
        
class EducationalBackgroundSerializer(serializers.Serializer):
    class Meta:
        models = EducationalBackground
        fields = '__all__'
        
class CertificateSerializer(serializers.Serializer):
    class Meta:
        model = Certificate
        fields = '__all__'
        
class AchievementSerializer(serializers.Serializer):
    class Meta:
        model = Achievement
        fields = '__all__'
        
class SocialLinkSerializer(serializers.Serializer):
    class Meta:
        model = SocialLink
        fields = '__all__'

class ExperienceSerializer(serializers.Serializer):
    class Meta:
        model = Experience
        fields = '__all__'
        
class ContactMessageSerializer(serializers.Serializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'