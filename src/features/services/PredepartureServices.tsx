import ServicePageTemplate from "@/components/templates/ServicePageTemplate"
import { predepartureServicesData } from "./data/serviceData"

export default function PredepartureServices() {
    return <ServicePageTemplate {...predepartureServicesData} />
}
