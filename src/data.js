// =====================================================================
//  EDIT THIS FILE to change anything on the website.
//  Details below were taken from the profile screenshots. Please check
//  spelling, job titles and dates before you publish.
// =====================================================================

const yearsSince = (year, monthIndex) => {
  const d = new Date()
  return Math.floor(d.getFullYear() - year + (d.getMonth() - monthIndex) / 12)
}

export const profile = {
  name: 'Shalashian Santhiya Arokiyamary',
  first: 'Shalashian',
  initials: 'SA',
  nameTamil: 'சலேஷியன் சந்தியா ஆரோக்கியமேரி',
  roles: ['Tax Professional', 'Senior Lecturer', 'Branch Manager', 'Finance Professional'],
  eyebrow: 'Tax · Accounting · Education',
  summary:
    'I work across tax, accounting and education in Sri Lanka. Today I advise as a Tax Professional / Consultant at SCBC and teach as a Senior Lecturer at Cathay Academy.',
  location: 'Sri Lanka',
  // Put your own photo in the /public folder and name it photo.jpg
  photo: '/photo.jpeg',
  quote: 'தர்மம் மறுபடியும் வெல்லும்',
  quoteEn: 'Righteousness will prevail again.',
  about: [
    'I am a finance professional based in Sri Lanka, working at the meeting point of tax, accounting and education.',
    'I currently work as a Tax Professional / Consultant at SCBC and as a Senior Lecturer at Cathay Academy. I also lead a branch as Branch Manager at Kreston Sri Lanka, and I began my professional journey as an Associate at KPMG Sri Lanka.',
    'My learning path includes the Institute of Chartered Accountants of Sri Lanka, AAT Sri Lanka and the Faculty of Management Studies & Commerce at the University of Jaffna.',
  ],
  facts: [
    ['Based in', 'Sri Lanka', 'MapPin'],
    ['Focus', 'Tax · Accounting · Teaching', 'Target'],
    ['Currently', 'SCBC · Cathay Academy', 'Briefcase'],
    ['Education', 'ICASL · AAT · University of Jaffna', 'GraduationCap'],
  ],
}

// TODO: replace these with the real contact details. Leave a value as ''
// (empty) and that button/line disappears from the site.
export const contact = {
  email: 'your-email@example.com',
  phone: '',
  whatsapp: '', // digits only with country code, e.g. 94771234567
  linkedin: '', // full URL
  facebook: '', // full URL
}

export const marquee = ['TAX ADVISORY', 'ACCOUNTING', 'TEACHING', 'MENTORING', 'LEADERSHIP', 'COMPLIANCE', 'FINANCE', 'INTEGRITY']

export const years = yearsSince(2018, 7)

export const stats = [
  { value: years, suffix: '+', label: 'Years of experience' },
  { value: 4, suffix: '', label: 'Organisations' },
  { value: 4, suffix: '', label: 'Places of learning' },
  { value: 2, suffix: '', label: 'Current roles' },
]

export const focus = [
  { icon: 'Scale', title: 'Tax advisory', text: 'Practical tax guidance and consulting for individuals and businesses.' },
  { icon: 'Calculator', title: 'Accounting & finance', text: 'Strong grounding in accounting built on AAT, CA studies and a commerce degree.' },
  { icon: 'GraduationCap', title: 'Teaching & mentoring', text: 'Helping students learn and grow as a Senior Lecturer.' },
  { icon: 'Building2', title: 'Branch leadership', text: 'Running branch operations and guiding a team towards results.' },
]

export const experience = [
  { org: 'SCBC – Sri Lanka', role: 'Tax Professional / Consultant', when: 'Oct 2021 – Present', current: true, text: 'Advising clients on tax matters as a professional consultant.' },
  { org: 'Cathay Academy', role: 'Senior Lecturer', when: 'Jun 2022 – Present', current: true, text: 'Teaching and mentoring students as a senior lecturer.' },
  { org: 'Kreston Sri Lanka', role: 'Branch Manager', when: 'Since Aug 2018', current: false, text: 'Managing branch operations and leading the team.' },
  { org: 'KPMG Sri Lanka', role: 'Associate', when: 'Early career', current: false, text: 'Worked as an Associate with a global professional services firm.' },
]

export const education = [
  { icon: 'Award', name: 'Institute of Chartered Accountants of Sri Lanka', note: 'Professional education' },
  { icon: 'BookOpen', name: 'AAT Sri Lanka', note: 'Professional education' },
  { icon: 'GraduationCap', name: 'Faculty of Management Studies & Commerce, University of Jaffna', note: 'University education' },
  { icon: 'School', name: 'St. Joseph’s College, Trincomalee', note: 'Class of 2011' },
]
