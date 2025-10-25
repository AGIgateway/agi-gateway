import ServicePageTemplate from "components/templates/ServicePageTemplate"
import { predepartureServicesData } from "features/services/data/serviceData"

export default function PredepartureServices() {
    return <ServicePageTemplate {...predepartureServicesData} />
}
