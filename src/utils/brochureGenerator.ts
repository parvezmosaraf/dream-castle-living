import jsPDF from 'jspdf';

export const generateBrochure = () => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = 210;
    const pageHeight = 297;

    // Colors matching the brand
    const primaryColor: [number, number, number] = [10, 46, 60]; // #0A2E3C
    const secondaryColor: [number, number, number] = [201, 169, 97]; // #C9A961
    const whiteColor: [number, number, number] = [255, 255, 255];
    const darkText: [number, number, number] = [51, 51, 51];

    // ==================== PAGE 1: COVER PAGE ====================
    // Full page dark background
    pdf.setFillColor(...primaryColor);
    pdf.rect(0, 0, pageWidth, pageHeight, 'F');

    // Top gold accent bar
    pdf.setFillColor(...secondaryColor);
    pdf.rect(0, 60, pageWidth, 4, 'F');

    // Company name at top
    pdf.setTextColor(...whiteColor);
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text('SEA DREAM CONSTRUCTION & DEVELOPMENTS LTD', pageWidth / 2, 45, { align: 'center' });

    // Main title - DREAM CASTLE
    pdf.setFontSize(36);
    pdf.setFont('helvetica', 'bold');
    pdf.text('DREAM CASTLE', pageWidth / 2, 100, { align: 'center' });

    // LIVING subtitle
    pdf.setFontSize(32);
    pdf.setTextColor(...secondaryColor);
    pdf.text('LIVING', pageWidth / 2, 120, { align: 'center' });

    // Decorative line
    pdf.setFillColor(...secondaryColor);
    pdf.rect(70, 130, 70, 2, 'F');

    // Subtitle
    pdf.setTextColor(...whiteColor);
    pdf.setFontSize(13);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Premium Lake View Apartments', pageWidth / 2, 145, { align: 'center' });

    // Location
    pdf.setFontSize(11);
    pdf.setTextColor(...secondaryColor);
    pdf.text('Ashulia Model Town, Savar, Dhaka', pageWidth / 2, 155, { align: 'center' });

    // Key highlights in a box
    pdf.setFillColor(255, 255, 255, 0.1);
    pdf.rect(30, 170, 150, 80, 'F');

    pdf.setTextColor(...whiteColor);
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');

    const highlights = [
        '• 1550 sqft Spacious Units',
        '• B+G+10 Floors Building',
        '• Breathtaking Lake Views',
        '• Flexible EMI Options',
        '• Premium Amenities',
        '• 10 Katha Land Area'
    ];

    let yPos = 185;
    highlights.forEach(highlight => {
        pdf.text(highlight, pageWidth / 2, yPos, { align: 'center' });
        yPos += 12;
    });

    // Price highlight box
    pdf.setFillColor(...secondaryColor);
    pdf.rect(40, 260, 130, 20, 'F');
    pdf.setTextColor(...primaryColor);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Starting from BDT 38,75,000', pageWidth / 2, 273, { align: 'center' });

    // Footer
    pdf.setTextColor(...whiteColor);
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    pdf.text('+880 1901 372340  |  +880 1647 712961', pageWidth / 2, 288, { align: 'center' });

    // ==================== PAGE 2: PROJECT OVERVIEW ====================
    pdf.addPage();

    // Header with background
    pdf.setFillColor(...primaryColor);
    pdf.rect(0, 0, pageWidth, 50, 'F');
    pdf.setTextColor(...whiteColor);
    pdf.setFontSize(28);
    pdf.setFont('helvetica', 'bold');
    pdf.text('PROJECT OVERVIEW', pageWidth / 2, 32, { align: 'center' });

    let y = 70;

    // About section
    pdf.setFontSize(18);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(...primaryColor);
    pdf.text('About Dream Castle Living', 20, y);
    y += 12;

    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(...darkText);
    const aboutText = 'Dream Castle Living offers an unparalleled residential experience in the heart of Ashulia Model Town. Our premium apartments combine modern luxury with natural beauty, featuring stunning lake views and world-class amenities.';
    const splitAbout = pdf.splitTextToSize(aboutText, 170);
    pdf.text(splitAbout, 20, y);
    y += splitAbout.length * 6 + 15;

    // Key Features in two columns
    pdf.setFontSize(18);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(...primaryColor);
    pdf.text('Key Features', 20, y);
    y += 12;

    // Left column
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(...darkText);

    const leftFeatures = [
        '• Unit Size: 1550 sqft',
        '• Building: B+G+10 Floors',
        '• Land Area: 10 Katha',
        '• Bedrooms: 3 Spacious Rooms',
        '• Bathrooms: 3 Modern Bathrooms'
    ];

    const rightFeatures = [
        '• Balconies: Lake View Balconies',
        '• Parking: Dedicated Space',
        '• Lift: High-Speed Elevators',
        '• Security: 24/7 CCTV',
        '• Power: Backup Generator'
    ];

    let leftY = y;
    leftFeatures.forEach(feature => {
        pdf.text(feature, 25, leftY);
        leftY += 8;
    });

    let rightY = y;
    rightFeatures.forEach(feature => {
        pdf.text(feature, 115, rightY);
        rightY += 8;
    });

    y = Math.max(leftY, rightY) + 15;

    // Amenities section
    pdf.setFontSize(18);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(...primaryColor);
    pdf.text('Premium Amenities', 20, y);
    y += 12;

    const amenitiesLeft = [
        '• 24/7 Security & CCTV',
        '• Backup Power Supply',
        '• Modern Intercom System',
        '• Landscaped Gardens'
    ];

    const amenitiesRight = [
        '• Children\'s Play Area',
        '• Community Hall',
        '• Rooftop Terrace',
        '• Water Treatment Plant'
    ];

    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(...darkText);

    leftY = y;
    amenitiesLeft.forEach(amenity => {
        pdf.text(amenity, 25, leftY);
        leftY += 7;
    });

    rightY = y;
    amenitiesRight.forEach(amenity => {
        pdf.text(amenity, 115, rightY);
        rightY += 7;
    });

    // ==================== PAGE 3: PRICING & PAYMENT ====================
    pdf.addPage();

    // Header
    pdf.setFillColor(...primaryColor);
    pdf.rect(0, 0, pageWidth, 50, 'F');
    pdf.setTextColor(...whiteColor);
    pdf.setFontSize(28);
    pdf.setFont('helvetica', 'bold');
    pdf.text('PRICING & PAYMENT', pageWidth / 2, 32, { align: 'center' });

    y = 75;

    // Main price box
    pdf.setFillColor(...secondaryColor);
    pdf.rect(20, y, 170, 35, 'F');
    pdf.setTextColor(...whiteColor);
    pdf.setFontSize(18);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Starting Price: BDT 38,75,000', pageWidth / 2, y + 15, { align: 'center' });
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text('(Thirty-Eight Lakh Seventy-Five Thousand Taka)', pageWidth / 2, y + 27, { align: 'center' });

    y += 50;

    // Payment breakdown
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(...primaryColor);
    pdf.text('Payment Breakdown', 20, y);
    y += 12;

    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(...darkText);

    const payments = [
        { label: 'Base Price:', value: 'BDT 38,75,000' },
        { label: 'Share Price:', value: 'BDT 9,30,000' },
        { label: 'Down Payment:', value: 'BDT 6,00,000' },
        { label: 'Monthly EMI (36 months):', value: 'BDT 1,00,000' },
        { label: 'Total Investment:', value: 'BDT 48,05,000', bold: true }
    ];

    payments.forEach((payment, index) => {
        if (payment.bold) {
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(14);
            y += 5;
        } else {
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(12);
        }

        pdf.text(payment.label, 25, y);
        pdf.text(payment.value, 160, y);
        y += payment.bold ? 12 : 10;
    });

    y += 10;

    // Investment benefits
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(...primaryColor);
    pdf.text('Why Invest in Dream Castle?', 20, y);
    y += 12;

    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(...darkText);

    const benefits = [
        '✓ Prime location in Ashulia Model Town',
        '✓ Stunning lake views from every unit',
        '✓ Easy EMI payment plans',
        '✓ High rental income potential (BDT 30-35K/month)',
        '✓ Excellent connectivity to Dhaka',
        '✓ Near universities and educational institutions',
        '✓ Future Uttara bridge proximity',
        '✓ Trusted developer with proven track record'
    ];

    benefits.forEach(benefit => {
        pdf.text(benefit, 25, y);
        y += 8;
    });

    // ==================== PAGE 4: LOCATION & CONTACT ====================
    pdf.addPage();

    // Header
    pdf.setFillColor(...primaryColor);
    pdf.rect(0, 0, pageWidth, 50, 'F');
    pdf.setTextColor(...whiteColor);
    pdf.setFontSize(28);
    pdf.setFont('helvetica', 'bold');
    pdf.text('LOCATION & CONTACT', pageWidth / 2, 32, { align: 'center' });

    y = 75;

    // Location section
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(...primaryColor);
    pdf.text('Project Location', 20, y);
    y += 12;

    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(...darkText);
    pdf.text('Ashulia Model Town, 1 No Hall, Zero Point', 25, y);
    y += 8;
    pdf.text('Block-F, Road No 1/A (North), Birulia', 25, y);
    y += 8;
    pdf.text('Savar, Dhaka - 1344, Bangladesh', 25, y);
    y += 20;

    // Nearby landmarks
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(...primaryColor);
    pdf.text('Nearby Landmarks', 20, y);
    y += 10;

    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(...darkText);

    const landmarks = [
        '• Adjacent to Ashulia Lake',
        '• 5 minutes from Ashulia Bus Stand',
        '• Easy access to Dhaka-Aricha Highway',
        '• Near educational institutions',
        '• Shopping centers within reach',
        '• Future Uttara bridge connectivity'
    ];

    landmarks.forEach(landmark => {
        pdf.text(landmark, 25, y);
        y += 7;
    });

    y += 15;

    // Contact information box
    pdf.setFillColor(...secondaryColor);
    pdf.rect(20, y, 170, 70, 'F');

    pdf.setTextColor(...whiteColor);
    pdf.setFontSize(20);
    pdf.setFont('helvetica', 'bold');
    pdf.text('GET IN TOUCH', pageWidth / 2, y + 15, { align: 'center' });

    pdf.setFontSize(13);
    pdf.setFont('helvetica', 'normal');
    y += 28;

    pdf.text('Phone: +880 1901 372340', pageWidth / 2, y, { align: 'center' });
    y += 10;
    pdf.text('Phone: +880 1647 712961', pageWidth / 2, y, { align: 'center' });
    y += 10;
    pdf.text('Email: seadreamconstruction@gmail.com', pageWidth / 2, y, { align: 'center' });
    y += 10;
    pdf.text('Web: seadreamdevelopment.vercel.app', pageWidth / 2, y, { align: 'center' });

    y += 25;

    // Call to action
    pdf.setFillColor(...primaryColor);
    pdf.rect(40, y, 130, 25, 'F');
    pdf.setTextColor(...whiteColor);
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Schedule Your Site Visit Today!', pageWidth / 2, y + 11, { align: 'center' });
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Call us or visit our website to book an appointment', pageWidth / 2, y + 19, { align: 'center' });

    // Footer
    y = 285;
    pdf.setFontSize(9);
    pdf.setTextColor(100, 100, 100);
    pdf.text('Sea Dream Construction & Developments Ltd | Trusted Real Estate Developer', pageWidth / 2, y, { align: 'center' });
    pdf.text('© 2026 All Rights Reserved', pageWidth / 2, y + 5, { align: 'center' });

    // Save the PDF
    pdf.save('Dream-Castle-Living-Brochure.pdf');
};
