import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Illustration from "../components/Illustration"
import SprintTimeline from "../components/SprintTimeline"
import Features from "../components/Features"
import HowItWorks from "../components/HowItWorks"
import WhoItsFor from "../components/WhoItsFor"
import EarlyAccess from "../components/EarlyAccess"
import Footer from "../components/Footer"

const IndexPage = () => (
  <main>
    <Header />
    <Hero />
    <Illustration />
    <SprintTimeline />
    <Features />
    <HowItWorks />
    <WhoItsFor />
    <EarlyAccess />
    <Footer />
  </main>
)

export default IndexPage

export const Head = () => (
  <>
    <title>Swarm Runner — Ship features in a day, not a sprint</title>
    <meta name="description" content="AI-powered collaboration platform that collapses the distance between product vision and shipped code." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  </>
)
