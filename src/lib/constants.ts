export const COMPANY = {
  name: "NATHI INTEGRATED IT SOLUTIONS FZE LLC",
  shortName: "NIS",
  tagline: "Complete IT Sales and Service Solutions",
  website: "https://www.nisuae.com",
  email: "sales@nisuae.com",
  phone: "+971 50 322 3760",
  whatsapp: "+971503223760",
  address: "26th Floor, Amber Gem Tower, Ajman, UAE",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.854!2d55.4372!3d25.4052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAmber+Gem+Tower+Ajman!5e0!3m2!1sen!2sae!4v1700000000000",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "AMC & Rental", href: "/amc-rental" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    title: "IT Hardware Supply",
    description:
      "We supply a comprehensive range of IT hardware including laptops, desktops, servers, networking equipment, and peripherals from leading global brands to businesses across the UAE.",
    icon: "Monitor",
  },
  {
    title: "Printer Installation & Repair",
    description:
      "Expert installation, configuration, and repair services for all major printer brands. Our certified technicians ensure minimal downtime and maximum productivity.",
    icon: "Printer",
  },
  {
    title: "Printer AMC Contracts",
    description:
      "Annual Maintenance Contracts that provide regular servicing, preventive maintenance, and priority repair services for your entire printer fleet at predictable costs.",
    icon: "FileText",
  },
  {
    title: "Network Setup & Configuration",
    description:
      "End-to-end network infrastructure design, installation, and configuration including LAN, WAN, Wi-Fi, and structured cabling solutions for offices of all sizes.",
    icon: "Network",
  },
  {
    title: "CCTV Installation",
    description:
      "Professional CCTV and surveillance system design, installation, and maintenance. We provide HD and IP camera solutions with remote monitoring capabilities.",
    icon: "Camera",
  },
  {
    title: "On-Site & Remote Technical Support",
    description:
      "Dedicated technical support team available for on-site visits and remote troubleshooting. We ensure your IT infrastructure runs smoothly around the clock.",
    icon: "Headphones",
  },
] as const;

export const PRODUCT_CATEGORIES = [
  {
    slug: "laptops-desktops-servers",
    title: "Laptops, Desktops & Servers",
    description:
      "From high-performance workstations to enterprise-grade servers, we supply computing solutions tailored to your business requirements. We partner with top brands including HP, Dell, Lenovo, and Acer to deliver reliable computing infrastructure.",
    features: [
      "Business Laptops & Ultrabooks",
      "Desktop Workstations",
      "Tower & Rack Servers",
      "All-in-One PCs",
      "Mini PCs & Thin Clients",
      "Custom Configuration Available",
    ],
    icon: "Laptop",
  },
  {
    slug: "printers-office-automation",
    title: "Printers & Office Automation",
    description:
      "Complete office automation solutions including multifunction printers, scanners, copiers, and document management systems. We offer products from HP, Canon, Epson, Brother, and other leading manufacturers.",
    features: [
      "Laser & Inkjet Printers",
      "Multifunction Printers (MFPs)",
      "Wide-Format Printers",
      "Scanners & Copiers",
      "Toner & Ink Supplies",
      "Print Management Solutions",
    ],
    icon: "Printer",
  },
  {
    slug: "it-networking-infrastructure",
    title: "IT & Networking Infrastructure",
    description:
      "Enterprise-grade networking equipment and infrastructure solutions including switches, routers, access points, structured cabling, and server racks. We design and implement scalable network architectures.",
    features: [
      "Managed & Unmanaged Switches",
      "Enterprise Routers",
      "Wireless Access Points",
      "Structured Cabling (Cat6/Cat6A)",
      "Server Racks & Enclosures",
      "UPS & Power Protection",
    ],
    icon: "Network",
  },
  {
    slug: "security-surveillance",
    title: "Security & Surveillance",
    description:
      "Comprehensive security solutions including CCTV cameras, NVR/DVR systems, access control, and alarm systems. We offer products from Hikvision, Dahua, and other trusted security brands with professional installation services.",
    features: [
      "IP & HD CCTV Cameras",
      "Network Video Recorders (NVR)",
      "Access Control Systems",
      "Alarm & Intrusion Detection",
      "Video Intercom Systems",
      "Remote Monitoring Solutions",
    ],
    icon: "Shield",
  },
] as const;

export const PARTNER_BRANDS = [
  "HP",
  "Dell",
  "Lenovo",
  "Canon",
  "Epson",
  "Brother",
  "Cisco",
  "Hikvision",
  "Dahua",
  "Acer",
  "Microsoft",
  "APC",
] as const;

export const STATS = [
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 1000, suffix: "+", label: "Projects Completed" },
  { value: 24, suffix: "/7", label: "Support Available" },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Certified IT Professionals",
    description:
      "Our team consists of certified engineers and technicians with deep expertise across all major IT platforms and technologies.",
  },
  {
    title: "Authorized Channel Partners",
    description:
      "We are authorized resellers and service partners of leading global IT brands, ensuring genuine products and warranty support.",
  },
  {
    title: "Rapid Response Time",
    description:
      "Our dedicated support team guarantees fast response times with on-site service available across the UAE within hours.",
  },
  {
    title: "Cost-Effective Solutions",
    description:
      "We deliver enterprise-grade IT solutions at competitive prices, helping businesses optimize their technology investments.",
  },
  {
    title: "End-to-End Service",
    description:
      "From consultation and procurement to installation, maintenance, and support — we handle the complete IT lifecycle.",
  },
  {
    title: "Proven Track Record",
    description:
      "Over 15 years of trusted service delivery to government entities, corporate offices, and SMEs across the UAE.",
  },
] as const;

export const AMC_PLANS = [
  {
    title: "Printer Rental Solutions",
    description:
      "Flexible printer rental programs for businesses of all sizes. Choose from a wide range of printers — from basic monochrome lasers to high-volume multifunction devices. Our rental plans include delivery, installation, regular maintenance, and toner replenishment.",
    features: [
      "Short-term & Long-term Rentals",
      "Wide Range of Printer Models",
      "Free Installation & Setup",
      "Inclusive Toner & Consumables",
      "Regular Preventive Maintenance",
      "Replacement Guarantee",
    ],
    icon: "Printer",
  },
  {
    title: "Annual Maintenance Contracts",
    description:
      "Comprehensive AMC plans that cover your entire IT hardware infrastructure. Our contracts include scheduled preventive maintenance visits, unlimited breakdown support, and priority response for critical issues. Protect your business from unexpected repair costs.",
    features: [
      "Scheduled Preventive Maintenance",
      "Unlimited Breakdown Calls",
      "Priority Response (4-hour SLA)",
      "Genuine Spare Parts",
      "Dedicated Account Manager",
      "Monthly Health Reports",
    ],
    icon: "FileText",
  },
  {
    title: "Corporate Support Plans",
    description:
      "Tailored IT support plans designed for medium and large enterprises. Get a dedicated team of IT professionals for on-site and remote support, proactive monitoring, and strategic IT consulting. Scale your IT capabilities without expanding your headcount.",
    features: [
      "Dedicated On-Site Engineers",
      "Remote Monitoring & Management",
      "Help Desk Support",
      "Network Administration",
      "IT Asset Management",
      "Quarterly Business Reviews",
    ],
    icon: "Building",
  },
] as const;
