from django.db import models


class User(models.Model):
    # naka separate yung custom user table sa built in ng system para mas madali na i-manage
    username = models.CharField(max_length=50, unique=True)
    email = models.EmailField(max_length=100, unique=True)
    password_hash = models.CharField(max_length=255)
    role = models.CharField(max_length=30, default='owner')
    status = models.CharField(max_length=20, default='active')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.username


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    middle_name = models.CharField(max_length=50)
    bio = models.TextField(blank=True, null=True)
    phone = models.CharField(max_length=30, blank=True, null=True)
    avatar_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Project(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='projects')
    title = models.CharField(max_length=150)
    description = models.TextField(blank=True, null=True)
    category = models.CharField(max_length=100, blank=True, null=True)
    technologies = models.TextField(blank=True, null=True)
    project_url = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class ProjectMedia(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='media')
    media_type = models.CharField(max_length=30, blank=True, null=True)
    media_url = models.URLField()
    caption = models.TextField(blank=True, null=True)
    display_order = models.PositiveIntegerField(default=1)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['display_order']


class Skill(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='skills')
    skill_name = models.CharField(max_length=100)
    category = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    proficiency_level = models.CharField(max_length=20, blank=True, null=True)
    is_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.skill_name} ({self.proficiency_level})"


class Analytics(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='analytics')
    page_visited = models.CharField(max_length=255)
    referrer = models.CharField(max_length=255, blank=True, null=True)
    interaction_type = models.CharField(max_length=100, blank=True, null=True)
    interaction_count = models.PositiveIntegerField(default=1)
    is_unique = models.BooleanField(default=True)
    visited_at = models.DateTimeField(auto_now_add=True)


class EducationalBackground(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='education')
    institution = models.CharField(max_length=100)
    degree = models.CharField(max_length=255, blank=True, null=True)
    field_of_study = models.CharField(max_length=150, blank=True, null=True)
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    class Meta:
        verbose_name_plural = "Educational background"

    def __str__(self):
        return f"{self.degree} — {self.institution}"


class Certificate(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='certificates')
    certificate_name = models.CharField(max_length=255)
    issuing_organization = models.CharField(max_length=150, blank=True, null=True)
    issue_date = models.DateField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    certificate_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.certificate_name


class Achievement(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='achievements')
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    organization = models.CharField(max_length=150, blank=True, null=True)
    achievement_date = models.DateField(blank=True, null=True)
    category = models.CharField(max_length=150, blank=True, null=True)
    image_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title


class SocialLink(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='social_links')
    platform = models.CharField(max_length=50)
    username = models.CharField(max_length=100, blank=True, null=True)
    profile_url = models.URLField()
    display_order = models.PositiveIntegerField(default=1)
    is_visible = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['display_order']

    def __str__(self):
        return self.platform


class Experience(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='experience')
    title = models.CharField(max_length=150)
    organization = models.CharField(max_length=150, blank=True, null=True)
    experience_type = models.CharField(max_length=50, blank=True, null=True)
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.title} @ {self.organization}"


class ContactMessage(models.Model):
    profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='messages')
    sender_name = models.CharField(max_length=100)
    sender_email = models.EmailField(max_length=100)
    subject = models.CharField(max_length=200, blank=True, null=True)
    message = models.TextField()
    status = models.CharField(max_length=30, default='unread')
    sent_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-sent_at']

    def __str__(self):
        return f"{self.sender_name} — {self.subject or '(no subject)'}"