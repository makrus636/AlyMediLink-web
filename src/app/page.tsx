import AppBar from "@/components/AppBar";
import AppFooter from "@/components/AppFooter";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <AppBar />

      <main style={{ marginTop: "72px" }}>
        {/* Hero Section */}
        <div className="herosection" id="home">
          <h1>Improve your business efficiency with integrated IT solutions</h1>
          <p>
            We help your business as you optimize technology, reduce downtime,
            and protect data from cyber threats.
          </p>
          <button className="cta-button">Free Consultation Now</button>
        </div>

        {/* Problem & Solution Section */}
        <div className="content-section">
          <div className="section-header">
            <h1>Solve this IT problem</h1>
            <ul>
              <li>
                <i className="ph ph-circle"></i>
                <div className="line">
                  <h3>Slow Network and Frequent Downtime</h3>
                  <p>Inhibits productivity and business operations</p>
                </div>
              </li>
              <li>
                <i className="ph ph-circle"></i>
                <div className="line">
                  <h3>Worried about Hacker Attacks</h3>
                  <p>Data and systems are vulnerable to security threats</p>
                </div>
              </li>
              <li>
                <i className="ph ph-circle"></i>
                <div className="line">
                  <h3>Server Maintenance Costs Soar</h3>
                  <p>IT investments are inefficient and difficult to predict</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="solution">
            <h2>We have the solution...</h2>
            <p>
              We provide comprehensive IT solutions to optimize your business
              operations, enhance security, and reduce costs. Our services
              include network optimization, cybersecurity measures, and cloud
              computing solutions tailored to your specific needs.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="section-services" id="service">
          <h2>superior service</h2>
          <div className="card-container">
            <div className="service-card">
              <i className="ph ph-shield-check fill"></i>
              <h3>Cybersecurity</h3>
              <p>
                Protect your business from cyber threats with our advanced
                security solutions.
              </p>
            </div>
            <div className="service-card">
              <i className="ph ph-cloud fill"></i>
              <h3>Cloud Solutions</h3>
              <p>
                Enhance collaboration and accessibility with our reliable cloud
                services.
              </p>
            </div>
            <div className="service-card">
              <i className="ph ph-broadcast fill"></i>
              <h3>Network Optimization</h3>
              <p>
                Improve your network performance and reduce downtime with our
                expert solutions.
              </p>
            </div>
          </div>
        </div>

        {/* How We Work Section */}
        <div className="howwork" id="howwork">
          <h2>How Do We Work</h2>
          <div className="steps-container">
            <div className="step">
              <ul>
                <li>
                  <i className="ph ph-number-circle-one"></i>
                  <h3>Consultation</h3>
                  <p>
                    We discuss your business needs and challenges to tailor our
                    solutions.
                  </p>
                </li>
                <li>
                  <i className="ph ph-number-circle-two"></i>
                  <h3>Planning</h3>
                  <p>
                    We develop a customized IT strategy to address your specific
                    requirements.
                  </p>
                </li>
                <li>
                  <i className="ph ph-number-circle-three"></i>
                  <h3>Implementation</h3>
                  <p>
                    We deploy the chosen solutions efficiently with minimal
                    disruption.
                  </p>
                </li>
                <li>
                  <i className="ph ph-number-circle-four"></i>
                  <h3>Support</h3>
                  <p>
                    We provide ongoing support and maintenance to ensure optimal
                    performance.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="about-section" id="about">
          <div className="about-container">
            {/* Kolom kiri: deskripsi perusahaan */}
            <div className="about-content">
              <h2>Tentang AlyMediLink</h2>
              <p>
                AlyMediLink adalah penyedia layanan konsultasi IT yang berfokus
                pada keamanan siber, solusi cloud, dan optimasi jaringan. Kami
                hadir untuk membantu bisnis Anda berkembang dengan teknologi
                yang tepat, andal, dan aman.
              </p>
            </div>

            {/* Kolom kanan: nilai/keunggulan perusahaan */}
            <div className="about-values">
              <div className="value-card">
                <i className="ph ph-shield-check"></i>
                <h3>Keamanan Terpercaya</h3>
                <p>
                  Kami melindungi data dan sistem bisnis Anda dari ancaman
                  siber dengan solusi keamanan berlapis.
                </p>
              </div>
              <div className="value-card">
                <i className="ph ph-users"></i>
                <h3>Tim Profesional</h3>
                <p>
                  Didukung oleh para ahli IT berpengalaman yang siap memberikan
                  solusi terbaik sesuai kebutuhan Anda.
                </p>
              </div>
              <div className="value-card">
                <i className="ph ph-chart-line-up"></i>
                <h3>Pertumbuhan Bisnis</h3>
                <p>
                  Kami membantu mengoptimalkan infrastruktur IT Anda agar
                  bisnis dapat tumbuh lebih efisien dan produktif.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section" id="contact">
          <h2>Hubungi Kami</h2>
          <div className="contact-container">
            {/* Kolom kiri: formulir */}
            <ContactForm />
            {/* Kolom kanan: informasi kontak alternatif */}
            <div className="contact-info">
              <h3>Informasi Kontak</h3>
              <p>
                <i className="ph ph-envelope"></i> aliamem16@gmail.com
              </p>
              <p>
                <i className="ph ph-phone"></i> +62 857-3883-7735
              </p>
              <p>
                <i className="ph ph-map-pin"></i> Bantengan, Mulyosari, Kec.
                Pagerwojo, Kabupaten Tulungagung, Jawa Timur 66262
              </p>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </>
  );
}
