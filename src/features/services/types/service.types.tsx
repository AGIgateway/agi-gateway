export interface BreadcrumbItem {
    label: string
    href: string
}

export interface AbroadStudyLink {
    country: string
    href: string
}

export interface ServiceFormData {
    service: string
    name: string
    email: string
    phone: string
    message: string
}

export interface ServicePageData {
    // Hero Section
    heroTitle: string
    heroBackgroundImage: string
    breadcrumbPath: BreadcrumbItem[]

    // Main Content - Left Column
    serviceTitle: string
    serviceDescription: string[]

    // Application Form
    formServiceOptions: string[]
    formDefaultService: string
    onFormSubmit?: (data: ServiceFormData) => void

    // Right Column - Abroad Study Links (optional)
    abroadStudyLinks?: AbroadStudyLink[]

    // Download Brochure (optional)
    brochureUrl?: string

    // Help CTA Card
    helpCtaImage: string
    helpCtaTitle: string
    helpCtaSubtitle: string
    helpCtaButtonText: string
    helpCtaButtonHref: string
}
