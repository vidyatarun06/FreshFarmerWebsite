import smtplib
from email.mime.text import MIMEText

sender_email = "vidyatarun06@gmail.com"  # Replace with your Gmail ID
sender_password = "puib hlyx rmkd nrhc"  # Replace with your 16-digit App Password
recipient_email = "tarunpasupuleti57@gmail.com"  # Test with your email

msg = MIMEText("Test email from FreshFarmer")
msg["Subject"] = "Test Email"
msg["From"] = sender_email
msg["To"] = recipient_email

try:
    with smtplib.SMTP("smtp.gmail.com", 587) as server:
        server.starttls()
        server.login(sender_email, sender_password)
        server.sendmail(sender_email, recipient_email, msg.as_string())
    print("Email sent successfully!")
except Exception as e:
    print(f"Failed to send email: {str(e)}")