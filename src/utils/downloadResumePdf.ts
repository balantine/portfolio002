export function downloadAcademicResumePdf(): void {
  const resumeContent = `%PDF-1.4
% Academic Portfolio & Curriculum Monograph
% Candidate: Jake Andrews (@Jake)
% Program: Master of Science in Information and Communication Technologies
% University: University of Wisconsin-Stout (UW-Stout)
% Specialization: Enterprise Systems & Office 365
% Contact: jake@avalon.dev | (715) 617-2471 | Monona, WI 53716
% Portfolio: https://portfolio.avalon.dev

1 0 obj
<<
  /Title (Jake Andrews - M.S. ICT Academic Portfolio & Resume)
  /Author (Jake Andrews)
  /Subject (University of Wisconsin-Stout MS-ICT Program Monograph)
  /Keywords (ICT, Office 365, Enterprise Systems, UW-Stout, Sociotechnical Systems)
>>
endobj
2 0 obj
<<
  /Type /Catalog
  /Pages 3 0 R
>>
endobj
3 0 obj
<<
  /Type /Pages
  /Kids [4 0 R]
  /Count 1
>>
endobj
4 0 obj
<<
  /Type /Page
  /Parent 3 0 R
  /MediaBox [0 0 612 792]
  /Contents 5 0 R
  /Resources <<
    /Font <<
      /F1 <<
        /Type /Font
        /Subtype /Type1
        /BaseFont /Helvetica
      >>
      /F2 <<
        /Type /Font
        /Subtype /Type1
        /BaseFont /Helvetica-Bold
      >>
    >>
  >>
>>
endobj
5 0 obj
<< /Length 850 >>
stream
BT
/F2 18 Tf
50 740 Td
(JAKE ANDREWS - ACADEMIC PORTFOLIO & RESUME) Tj
/F1 11 Tf
0 -22 Td
(Candidate for M.S. in Information and Communication Technologies) Tj
0 -16 Td
(University of Wisconsin-Stout | Blue Devils | Madison / Monona, WI) Tj
0 -16 Td
(Phone: (715) 617-2471 | Email: jake@avalon.dev | Web: portfolio.avalon.dev) Tj
0 -28 Td
/F2 13 Tf
(PROFESSIONAL PROFILE & ENTERPRISE SPECIALIZATION) Tj
/F1 10 Tf
0 -18 Td
(Experienced technology professional specializing in Enterprise Applications, Office 365,) Tj
0 -14 Td
(systems administration, networking, and IT governance for non-profit insurance organizations.) Tj
0 -26 Td
/F2 13 Tf
(UW-STOUT MS-ICT PROGRAM OBJECTIVES & COURSE SEQUENCE) Tj
/F1 10 Tf
0 -18 Td
(- ICT 700: Intro to ICT & Portfolio Development) Tj
0 -14 Td
(- ICT 701: Information & Communication Technologies in Organizations) Tj
0 -14 Td
(- ICT 505: Information Systems for Enterprise) Tj
0 -14 Td
(- ICT 710: Learning Technologies & Training Systems) Tj
0 -14 Td
(- ICT 555: ICT Systems Analysis & Design) Tj
0 -14 Td
(- ICT 732: Technology Futures & Systems Forecasting) Tj
0 -14 Td
(- ICT 605: Enterprise Technology Seminar & Credentialing) Tj
0 -14 Td
(- DMT 511: ICT Analytics & Emerging Telemetry) Tj
0 -14 Td
(- ICT 601: IT Policy, Regulatory Frameworks & Audit (NIST 800-53 / CMMC)) Tj
0 -14 Td
(- ICT 733: Technology Adoption and Historical/Social Implications) Tj
0 -14 Td
(- ICT 780: Capstone ICT Electronic Portfolio) Tj
ET
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000210 00000 n 
0000000360 00000 n 
0000000418 00000 n 
0000000478 00000 n 
0000000720 00000 n 
trailer
<<
  /Size 6
  /Root 2 0 R
  /Info 1 0 R
>>
startxref
1630
%%EOF`;

  const blob = new Blob([resumeContent], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Jake_Andrews_MS_ICT_Portfolio_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
