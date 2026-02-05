import jsPDF from 'jspdf';
import { useLanguage } from '@/contexts/LanguageContext';

export const generateBrochure = () => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = 210;
    const pageHeight = 297;

    // Colors matching the brand
    const primaryColor = '#0A2E3C';
    const secondaryColor = '#C9A961';
    const textColor = '#333333';

    // Page 1: Cover Page
    // Background gradient effect
    pdf.setFillColor(10, 46, 60); // Primary color
    pdf.rect(0, 0, pageWidth, pageHeight, 'F');

    // Gold accent bar
    pdf.setFillColor(201, 169, 97); // Secondary color
    pdf.rect(0, 80, pageWidth, 3, 'F');

    // Company Logo placeholder (you can add actual logo later)
    pdf.setFillColor(255, 255, 255);
    pdf.circle(pageWidth / 2, 50, 15, 'F');

    // Title
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(32);
    pdf.setFont('helvetica', 'bold');
    pdf.text('DREAM CASTLE', pageWidth / 2, 110, { align: 'center' });
    pdf.text('LIVING', pageWidth / 2, 125, { align: 'center' });

    // Subtitle
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Premium Lake View Apartments', pageWidth / 2, 140, { align: 'center' });
    pdf.text('Ashulia Model Town, Savar, Dhaka', pageWidth / 2, 150, { align: 'center' });

    // Gold decorative line
    pdf.setFillColor(201, 169, 97);
    pdf.rect(70, 160, 70, 1, 'F');

    // Key highlights
    pdf.setFontSize(12);
    pdf.setTextColor(201, 169, 97);
    const highlights = [
        '✦ 1550 sqft Spacious Units',
        '✦ B+G+10 Floors Building',
        '✦ Breathtaking Lake Views',
        '✦ EMI Payment Options',
        '✦ Premium Amenities',
        '✦ 10 Katha Land Area'
    ];

    let yPos = 180;
    highlights.forEach(highlight => {
        pdf.text(highlight, pageWidth / 2, yPos, { align: 'center' });
        yPos += 10;
    });

    // Footer
    pdf.setFontSize(10);
    pdf.setTextColor(255, 255, 255);
    pdf.text('Sea Dream Construction & Developments Ltd', pageWidth / 2, 270, { align: 'center' });
    pdf.text('+880 1901 372340 | seadreamconstruction@gmail.com', pageWidth / 2, 280, { align: 'center' });

    // Page 2: Project Overview
    pdf.addPage();

    // Header
    pdf.setFillColor(10, 46, 60);
    pdf.rect(0, 0, pageWidth, 40, 'F');
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(20);
    pdf.setFont('helvetica', 'bold');
    pdf.text('PROJECT OVERVIEW', pageWidth / 2, 25, { align: 'center' });

    // Content
    pdf.setTextColor(51, 51, 51);
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');

    let y = 55;

    // About the Project
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(10, 46, 60);
    pdf.text('About Dream Castle Living', 20, y);
    y += 10;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(51, 51, 51);
    const aboutText = 'Dream Castle Living offers an unparalleled residential experience in the heart of Ashulia Model Town. Our premium apartments combine modern luxury with natural beauty, featuring stunning lake views and world-class amenities. Built by Sea Dream Developments Ltd, this project represents the perfect blend of comfort, elegance, and affordability.';
    const splitAbout = pdf.splitTextToSize(aboutText, 170);
    pdf.text(splitAbout, 20, y);
    y += splitAbout.length * 5 + 10;

    // Key Features
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(10, 46, 60);
    pdf.text('Key Features', 20, y);
    y += 10;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(51, 51, 51);

    const features = [
        { label: 'Unit Size:', value: '1550 sqft' },
        { label: 'Building Structure:', value: 'B+G+10 Floors' },
        { label: 'Land Area:', value: '10 Katha' },
        { label: 'Bedrooms:', value: '3 Bedrooms' },
        { label: 'Bathrooms:', value: '3 Bathrooms' },
        { label: 'Balconies:', value: 'Spacious Balconies with Lake View' },
        { label: 'Parking:', value: 'Dedicated Parking Space' },
        { label: 'Lift:', value: 'High-Speed Elevators' }
    ];

    features.forEach(feature => {
        pdf.setFont('helvetica', 'bold');
        pdf.text(feature.label, 25, y);
        pdf.setFont('helvetica', 'normal');
        pdf.text(feature.value, 70, y);
        y += 7;
    });

    // Amenities Section
    y += 10;
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(10, 46, 60);
    pdf.text('Premium Amenities', 20, y);
    y += 10;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(51, 51, 51);

    const amenities = [
        '• 24/7 Security with CCTV Surveillance',
        '• Backup Power Supply',
        '• Modern Intercom System',
        '• Landscaped Gardens',
        '• Children\'s Play Area',
        '• Community Hall',
        '• Rooftop Terrace',
        '• Water Treatment Plant'
    ];

    const col1 = amenities.slice(0, 4);
    const col2 = amenities.slice(4);

    col1.forEach(amenity => {
        pdf.text(amenity, 25, y);
        y += 6;
    });

    y = y - (col1.length * 6);
    col2.forEach(amenity => {
        pdf.text(amenity, 115, y);
        y += 6;
    });

    // Page 3: Pricing & Payment
    pdf.addPage();

    // Header
    pdf.setFillColor(10, 46, 60);
    pdf.rect(0, 0, pageWidth, 40, 'F');
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(20);
    pdf.setFont('helvetica', 'bold');
    pdf.text('PRICING & PAYMENT', pageWidth / 2, 25, { align: 'center' });

    y = 55;

    // Pricing
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(10, 46, 60);
    pdf.text('Investment Details', 20, y);
    y += 15;

    // Price Box
    pdf.setFillColor(201, 169, 97);
    pdf.rect(20, y - 5, 170, 30, 'F');
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Starting Price: ৳38,75,000', pageWidth / 2, y + 5, { align: 'center' });
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    pdf.text('(Thirty-Eight Lakh Seventy-Five Thousand Taka Only)', pageWidth / 2, y + 15, { align: 'center' });

    y += 45;

    // EMI Details
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(10, 46, 60);
    pdf.text('Flexible EMI Options', 20, y);
    y += 10;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(51, 51, 51);

    const emiDetails = [
        { label: 'Monthly EMI:', value: '৳1,00,000' },
        { label: 'Duration:', value: '36 Months' },
        { label: 'Down Payment:', value: 'As per discussion' },
        { label: 'Booking Money:', value: 'Contact for details' }
    ];

    emiDetails.forEach(detail => {
        pdf.setFont('helvetica', 'bold');
        pdf.text(detail.label, 25, y);
        pdf.setFont('helvetica', 'normal');
        pdf.text(detail.value, 70, y);
        y += 8;
    });

    y += 10;

    // Payment Benefits
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(10, 46, 60);
    pdf.text('Why Choose Dream Castle?', 20, y);
    y += 10;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(51, 51, 51);

    const benefits = [
        '✓ Prime location in Ashulia Model Town',
        '✓ Stunning lake views from every unit',
        '✓ Easy EMI payment plans',
        '✓ Share-based ownership model',
        '✓ High ROI potential',
        '✓ Excellent connectivity to Dhaka',
        '✓ Peaceful and serene environment',
        '✓ Trusted developer with proven track record'
    ];

    benefits.forEach(benefit => {
        pdf.text(benefit, 25, y);
        y += 7;
    });

    // Page 4: Location & Contact
    pdf.addPage();

    // Header
    pdf.setFillColor(10, 46, 60);
    pdf.rect(0, 0, pageWidth, 40, 'F');
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(20);
    pdf.setFont('helvetica', 'bold');
    pdf.text('LOCATION & CONTACT', pageWidth / 2, 25, { align: 'center' });

    y = 55;

    // Location
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(10, 46, 60);
    pdf.text('Project Location', 20, y);
    y += 10;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(51, 51, 51);
    pdf.text('Ashulia Model Town, 1 No Hall, Zero Point', 25, y);
    y += 6;
    pdf.text('Block-F, Road No 1/A (North), Birulia', 25, y);
    y += 6;
    pdf.text('Saver, Dhaka - 1344, Bangladesh', 25, y);
    y += 15;

    // Nearby Landmarks
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(10, 46, 60);
    pdf.text('Nearby Landmarks:', 25, y);
    y += 8;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(51, 51, 51);
    const landmarks = [
        '• Close to Ashulia Lake',
        '• 5 minutes from Ashulia Bus Stand',
        '• Easy access to Dhaka-Aricha Highway',
        '• Near educational institutions',
        '• Shopping centers within reach'
    ];

    landmarks.forEach(landmark => {
        pdf.text(landmark, 30, y);
        y += 6;
    });

    y += 15;

    // Contact Information
    pdf.setFillColor(201, 169, 97);
    pdf.rect(20, y, 170, 60, 'F');

    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Contact Us', pageWidth / 2, y + 12, { align: 'center' });

    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    y += 25;

    pdf.text('📞 +880 1901 372340', pageWidth / 2, y, { align: 'center' });
    y += 8;
    pdf.text('📞 +880 1647 712961', pageWidth / 2, y, { align: 'center' });
    y += 8;
    pdf.text('✉ seadreamconstruction@gmail.com', pageWidth / 2, y, { align: 'center' });
    y += 8;
    pdf.text('🌐 seadreamdevelopment.vercel.app', pageWidth / 2, y, { align: 'center' });

    y += 20;

    // Call to Action
    pdf.setFillColor(10, 46, 60);
    pdf.rect(40, y, 130, 25, 'F');
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Schedule Your Site Visit Today!', pageWidth / 2, y + 10, { align: 'center' });
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Call us or visit our website to book an appointment', pageWidth / 2, y + 18, { align: 'center' });

    // Footer
    y = 280;
    pdf.setFontSize(8);
    pdf.setTextColor(100, 100, 100);
    pdf.text('Sea Dream Construction & Developments Ltd | Trusted Real Estate Developer', pageWidth / 2, y, { align: 'center' });
    pdf.text('© 2026 All Rights Reserved | Website by Md Parvez Mosaraf', pageWidth / 2, y + 5, { align: 'center' });

    // Save the PDF
    pdf.save('Dream-Castle-Living-Brochure.pdf');
};
