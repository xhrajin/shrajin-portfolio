import { portfolioKnowledge, chatbotResponses } from "@/data/portfolio-knowledge"

export const generateBotResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase().trim()

  // Basic greetings and social responses
  if (lowerMessage.includes("hi") || lowerMessage.includes("hello") || lowerMessage.includes("hey")) {
    const greetings = chatbotResponses.greeting
    return greetings[Math.floor(Math.random() * greetings.length)]
  }

  if (lowerMessage.includes("bye") || lowerMessage.includes("goodbye") || lowerMessage.includes("see you")) {
    return "Thank you for your interest in Shrajin's profile! Feel free to reach out to him directly at shrajinmaharjan@gmail.com. Have a great day!"
  }

  if (
    lowerMessage.includes("ok") ||
    lowerMessage.includes("okay") ||
    lowerMessage.includes("thanks") ||
    lowerMessage.includes("thank you")
  ) {
    return "You're welcome! Is there anything else you'd like to know about Shrajin's experience or skills?"
  }

  // Personal Information
  if (lowerMessage.includes("name") || lowerMessage.includes("who is")) {
    return `Shrajin Maharjan is a ${portfolioKnowledge.personal.age} IT Service Delivery Analyst from ${portfolioKnowledge.personal.currentResidence}. He's an AI enthusiast with ITIL V4 certification and nearly 3 years of experience in IT optimization and automation.`
  }

  if (lowerMessage.includes("age") || lowerMessage.includes("old")) {
    return `Shrajin is ${portfolioKnowledge.personal.age}, born on ${portfolioKnowledge.personal.dateOfBirth}.`
  }

  if (lowerMessage.includes("location") || lowerMessage.includes("address") || lowerMessage.includes("where")) {
    return `Shrajin is currently based in ${portfolioKnowledge.personal.currentResidence}. He's available for both local and international remote work opportunities.`
  }

  if (lowerMessage.includes("language") || lowerMessage.includes("speak")) {
    return `Shrajin speaks ${Object.entries(portfolioKnowledge.personal.languages)
      .map(([lang, level]) => `${lang.charAt(0).toUpperCase() + lang.slice(1)} (${level})`)
      .join(", ")}.`
  }

  // Experience and Work
  if (lowerMessage.includes("experience") || lowerMessage.includes("work") || lowerMessage.includes("job")) {
    const currentRole = portfolioKnowledge.workExperience[0]
    return `Shrajin currently works as ${currentRole.role} at ${currentRole.company} since ${currentRole.period}. He has nearly 3 years of experience at CloudFactory, progressing through multiple roles including Data Annotator, IT Service Delivery Analyst, SecOps IT Secondment, and currently Business Application IT Secondment. His key achievements include 70% reduction in manual work through automation and successful onboarding of 2,500+ devices.`
  }

  if (
    lowerMessage.includes("cloudfactory") ||
    lowerMessage.includes("current job") ||
    lowerMessage.includes("current role")
  ) {
    const currentRole = portfolioKnowledge.workExperience[0]
    return `At CloudFactory, Shrajin currently works as ${currentRole.role}. He's progressed through multiple roles over nearly 3 years, including SecOps IT Secondment where he led device authentication projects and onboarded 2,500+ devices. His achievements include 70% reduction in manual work through automation and 30% reduction in analyst training time.`
  }

  if (lowerMessage.includes("automation") || lowerMessage.includes("automate")) {
    return `Shrajin is passionate about automation! He's reduced manual work by 70% through software deployment automation, uses tools like Zapier, Make, n8n, and AI Agentic Workflows. He's currently working on JIRA automations in his Business Application role and has experience with various automation platforms.`
  }

  if (lowerMessage.includes("secops") || lowerMessage.includes("security")) {
    return `Shrajin worked as SecOps IT Secondment from Jan 2025 - Apr 2025, where he led the Device Authentication Project, successfully onboarded 2,500+ devices, and centralized device data management to enhance organizational security compliance.`
  }

  // Skills and Technology
  if (lowerMessage.includes("skills") || lowerMessage.includes("technology") || lowerMessage.includes("programming")) {
    return `Shrajin's technical skills include: Programming (${portfolioKnowledge.skills.technical.join(", ")}), Tools & Platforms (JIRA, Google Workspace, Cato Networks, Slack, Samanage), and AI & Automation (${portfolioKnowledge.skills.aiAutomation.slice(0, 4).join(", ")}, and more). He's also ITIL V4 certified and experienced in computer hardening and hardware assembling.`
  }

  if (lowerMessage.includes("python") || lowerMessage.includes("programming")) {
    return `Yes! Shrajin is proficient in Python and uses it for automation, APIs, and scripting. He's currently following a structured multi-phase roadmap for self-learning AI Engineering with Python as a core skill.`
  }

  if (lowerMessage.includes("ai") || lowerMessage.includes("artificial intelligence")) {
    return `Shrajin is deeply passionate about AI! He's planning to pursue a Masters in Artificial Intelligence, runs an 'AI at Work Initiative' at CloudFactory, and is working on AI-powered projects like an OCR Document Checking System. He believes in leveraging AI for business transformation and responsible AI use.`
  }

  if (lowerMessage.includes("jira") || lowerMessage.includes("business application")) {
    return `In his current role as Business Application IT Secondment, Shrajin learns and assists the Business Application team to build JIRA Automations. He proactively collaborates with BizApps Tech members to design and implement automation solutions.`
  }

  // Education
  if (
    lowerMessage.includes("education") ||
    lowerMessage.includes("study") ||
    lowerMessage.includes("college") ||
    lowerMessage.includes("degree")
  ) {
    const education = portfolioKnowledge.education[0]
    return `Shrajin completed his ${education.degree} from ${education.institution} with a ${education.result}. His coursework included ${education.courses.slice(0, 3).join(", ")}, and more. He also worked with classmates to fund and donate stationary items to remote schools. He's now planning to pursue a Masters in Artificial Intelligence.`
  }

  if (lowerMessage.includes("xavier") || lowerMessage.includes("bim")) {
    const education = portfolioKnowledge.education[0]
    return `Shrajin studied ${education.degree} at ${education.institution} from ${education.period}, achieving a ${education.result}. His courses included ${education.courses.join(", ")}. He got structured and practical knowledge to bridge IT with Business.`
  }

  // Projects
  if (lowerMessage.includes("project") || lowerMessage.includes("portfolio")) {
    const projects = portfolioKnowledge.projects.slice(0, 3)
    return `Shrajin has worked on several impressive projects: ${projects.map((p) => `${p.name} - ${p.description}`).join("; ")}. He's also currently developing an OCR Document Checking System and planning a Digital Learning Platform.`
  }

  if (lowerMessage.includes("onetime") || lowerMessage.includes("secret")) {
    const project = portfolioKnowledge.projects[0]
    return `The ${project.name} is one of Shrajin's key projects. ${project.description}. This project significantly ${project.impact} and showcases his expertise in ${project.technologies.join(", ")}.`
  }

  if (
    lowerMessage.includes("ecommerce") ||
    lowerMessage.includes("trade link") ||
    lowerMessage.includes("esewa") ||
    lowerMessage.includes("khalti")
  ) {
    const project = portfolioKnowledge.projects[1]
    return `${project.name} is an e-commerce platform where Shrajin ${project.description}. You can check it out at ${project.url}. This project demonstrates his expertise in ${project.technologies.join(", ")}.`
  }

  if (lowerMessage.includes("ocr") || lowerMessage.includes("document")) {
    const project = portfolioKnowledge.projects.find((p) => p.name.includes("OCR"))
    return `Shrajin is currently working on an ${project?.name} - ${project?.description}. The system features ${project?.features?.join(", ")}. It's built using ${project?.technologies.join(", ")}.`
  }

  // Contact and Availability
  if (
    lowerMessage.includes("contact") ||
    lowerMessage.includes("hire") ||
    lowerMessage.includes("email") ||
    lowerMessage.includes("phone")
  ) {
    return `You can reach Shrajin at ${portfolioKnowledge.personal.contact.email} or call ${portfolioKnowledge.personal.contact.phone}. He's also available on LinkedIn (${portfolioKnowledge.personal.contact.linkedin}) and Instagram (${portfolioKnowledge.personal.contact.instagram}). He typically responds within 24 hours and is available for both local and international projects.`
  }

  if (lowerMessage.includes("available") || lowerMessage.includes("time") || lowerMessage.includes("schedule")) {
    return `Shrajin is available during ${portfolioKnowledge.availability.workingHours} and typically responds to emails ${portfolioKnowledge.availability.responseTime}. He's open to working with international clients and remote collaboration across different time zones.`
  }

  // Certifications and Learning
  if (lowerMessage.includes("certification") || lowerMessage.includes("itil")) {
    return `Shrajin is ITIL V4 certified and is planning to pursue a Masters in Artificial Intelligence with applications planned for November intake. He's continuously learning and following a structured roadmap for AI Engineering.`
  }

  if (lowerMessage.includes("learning") || lowerMessage.includes("goal")) {
    return `Shrajin is passionate about continuous learning! His current learning goals include ${portfolioKnowledge.interests.learning.join(", ")}. He's also planning to launch a Digital Learning Platform to teach modern, practical courses to business students and professionals.`
  }

  // Personal attributes
  if (
    lowerMessage.includes("personality") ||
    lowerMessage.includes("attribute") ||
    lowerMessage.includes("character")
  ) {
    return `Shrajin is ${portfolioKnowledge.personalAttributes.join(", ")}. He's passionate about using technology to benefit humanity and is always open to collaborations and knowledge-sharing.`
  }

  // Services and Consulting
  if (lowerMessage.includes("service") || lowerMessage.includes("consulting") || lowerMessage.includes("help")) {
    return `Shrajin offers expertise in IT Service Optimization, Process Automation, AI Integration, Web Development, and Digital Transformation. He's experienced in reducing manual work through automation, streamlining IT processes, and implementing AI solutions for business transformation.`
  }

  // Salary/Rate (Professional response)
  if (
    lowerMessage.includes("salary") ||
    lowerMessage.includes("rate") ||
    lowerMessage.includes("cost") ||
    lowerMessage.includes("price")
  ) {
    return `For project rates and consulting fees, please contact Shrajin directly at ${portfolioKnowledge.personal.contact.email} or ${portfolioKnowledge.personal.contact.phone}. He'll be happy to discuss project requirements and provide a customized quote based on your specific needs.`
  }

  // CV/Resume
  if (lowerMessage.includes("cv") || lowerMessage.includes("resume")) {
    return `You can view Shrajin's CV by clicking the 'View My CV' button on this page, or access it directly at: https://drive.google.com/file/d/1haC2kXjch0IqFTYTOSSS-9AOCLXGP6GY/view`
  }

  // Default responses
  const fallbackResponses = chatbotResponses.fallback
  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]
}

export const quickQuestions = [
  "What's your current role?",
  "Tell me about your experience",
  "What are your technical skills?",
  "Show me your projects",
  "How can I contact you?",
  "What's your educational background?",
]
