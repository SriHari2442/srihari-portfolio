import { jsPDF } from 'jspdf';
import { PERSONAL_INFO, EXPERIENCES, FEATURED_PROJECT, PRODUCT_CONCEPT, SKILL_CATEGORIES, EDUCATION } from '../data/portfolioData';

export const generateAndDownloadResumePDF = (): string => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const filename = 'Sri-Hari-Mada-Frontend-Engineer-Resume.pdf';

  // Colors
  const primaryColor = '#2563EB'; // Indigo / Blue
  const darkColor = '#0F172A'; // Slate 900
  const bodyColor = '#334155'; // Slate 700
  const lightBg = '#F8FAFC'; // Slate 50
  const lineGap = 5;

  let y = 15;
  const leftMargin = 15;
  const rightMargin = 195;
  const contentWidth = rightMargin - leftMargin;

  // Header Background Banner
  doc.setFillColor(241, 245, 249); // slate-100
  doc.rect(10, 10, 190, 32, 'F');

  // Header Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(15, 23, 42); // dark
  doc.text(PERSONAL_INFO.name.toUpperCase(), leftMargin, y + 4);

  // Subtitle / Role
  doc.setFontSize(11);
  doc.setTextColor(37, 99, 235); // Blue
  doc.text(`${PERSONAL_INFO.role}  |  Frontend & Web Architecture Specialist`, leftMargin, y + 11);

  // Contact Info Line
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const contactText = `Location: ${PERSONAL_INFO.location}   |   Phone: ${PERSONAL_INFO.phone}   |   Email: ${PERSONAL_INFO.email}`;
  doc.text(contactText, leftMargin, y + 17);

  const linksText = `LinkedIn: ${PERSONAL_INFO.linkedin}   |   GitHub: ${PERSONAL_INFO.github}`;
  doc.text(linksText, leftMargin, y + 22);

  y = 48;

  // Helper for Section Titles
  const addSectionHeader = (title: string) => {
    if (y > 265) {
      doc.addPage();
      y = 15;
    }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(15, 23, 42);
    doc.text(title.toUpperCase(), leftMargin, y);

    // Decorative underline
    doc.setDrawColor(226, 232, 240); // slate-200
    doc.setLineWidth(0.5);
    doc.line(leftMargin, y + 2, rightMargin, y + 2);

    doc.setDrawColor(37, 99, 235);
    doc.setLineWidth(1);
    doc.line(leftMargin, y + 2, leftMargin + 25, y + 2);

    y += 8;
  };

  // 1. Professional Summary
  addSectionHeader('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  const summaryLines = doc.splitTextToSize(PERSONAL_INFO.professionalSummary, contentWidth);
  doc.text(summaryLines, leftMargin, y);
  y += summaryLines.length * 4.5 + 4;

  // 2. Professional Experience
  addSectionHeader('Professional Experience');

  EXPERIENCES.forEach((exp) => {
    if (y > 250) {
      doc.addPage();
      y = 15;
    }

    // Role & Company Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text(`${exp.role} — ${exp.company}`, leftMargin, y);

    // Period
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(37, 99, 235);
    doc.text(exp.period, rightMargin, y, { align: 'right' });
    y += 4.5;

    // Project & Location
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    doc.text(`Project: ${exp.project} (${exp.domain})  |  Location: ${exp.location}`, leftMargin, y);
    y += 5;

    // Responsibilities
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);

    exp.responsibilities.forEach((resp) => {
      if (y > 270) {
        doc.addPage();
        y = 15;
      }
      const bulletLines = doc.splitTextToSize(`•  ${resp}`, contentWidth - 4);
      doc.text(bulletLines, leftMargin + 2, y);
      y += bulletLines.length * 4;
    });

    // Tech stack
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    doc.text(`Technologies: ${exp.technologies.join(', ')}`, leftMargin + 2, y + 1);
    y += 7;
  });

  // 3. Featured Project
  addSectionHeader('Featured Engineering Project');
  if (y > 255) {
    doc.addPage();
    y = 15;
  }

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text(`${FEATURED_PROJECT.name} — ${FEATURED_PROJECT.subtitle}`, leftMargin, y);
  y += 4.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const projDesc = doc.splitTextToSize(FEATURED_PROJECT.description, contentWidth);
  doc.text(projDesc, leftMargin, y);
  y += projDesc.length * 4 + 2;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105);
  doc.text(`Key Technologies: ${FEATURED_PROJECT.technologies.join(', ')}`, leftMargin, y);
  y += 7;

  // 4. Technical Skills
  addSectionHeader('Technical Skills & Core Competencies');
  if (y > 250) {
    doc.addPage();
    y = 15;
  }

  SKILL_CATEGORIES.forEach((cat) => {
    if (y > 270) {
      doc.addPage();
      y = 15;
    }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`${cat.title}: `, leftMargin, y);

    const titleWidth = doc.getTextWidth(`${cat.title}: `);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const skillText = cat.skills.join(', ');
    const skillLines = doc.splitTextToSize(skillText, contentWidth - titleWidth);

    doc.text(skillLines[0], leftMargin + titleWidth, y);
    if (skillLines.length > 1) {
      for (let i = 1; i < skillLines.length; i++) {
        y += 4;
        doc.text(skillLines[i], leftMargin + titleWidth, y);
      }
    }
    y += 5;
  });

  y += 2;

  // 5. Education
  addSectionHeader('Education');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text(EDUCATION.degree, leftMargin, y);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  doc.text(`${EDUCATION.institution} (${EDUCATION.year})`, rightMargin, y, { align: 'right' });

  // Save PDF
  doc.save(filename);
  return filename;
};
