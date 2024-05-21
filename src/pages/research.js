import React, { useState } from "react";
import EcoNetworkImg from "../images/deelab.png";
import SVGif from "../images/sv.gif";

const Research = () => {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleExpand = (id) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="research-page page-content">
      <div className="text-container">
        <div className="project">
          <div
            className="title"
            onClick={() => toggleExpand("species-interactions")}
          >
            Studying Species Interactions in the Gulf of Maine
          </div>
          <div className="sub-heading">
            Lucy Van Kleunen, Henry Li, Luis de Pablo, Laura Dee, Allison Barner
          </div>
          {expandedProjects["species-interactions"] && (
            <div className="text">
              Studying the intricate relationships among species within complex
              ecosystems offers valuable insights into the mechanisms driving
              ecological dynamics and the impacts of human-induced changes to
              ecosystems. Feeding relationships are commonly studied and
              describe the flow of energy through an ecosystem. The Allometric
              Trophic Network (ATN) model is widely used to simulate these
              feeding (trophic) interactions in ecological networks and
              emphasizes the body mass scaling of individual species and body
              mass ratio of predator-prey interactions. While ATN models often
              exclude non-trophic interactions for simplicity, previous studies
              on the Chilean rocky intertidal ecosystem reveal the significance
              of non-trophic interactions (such as competition for space and
              predator interference) in shaping species relationships, primarily
              among basal and sessile species. Further, positive interactions
              (such as refuge provisioning and recruitment facilitation) can
              increase survival and protection for certain species, enhance
              community diversity, and improve resource utilization and
              ecological resilience. We extended the traditional ATN model to
              incorporate various non-trophic interaction types in order to
              enhance our understanding of ecosystem stability and our ability
              to predict ecosystem responses to disturbances.
            </div>
          )}
          <img src={EcoNetworkImg} alt="Ecological Network" />
        </div>
        <div className="project">
          <div
            className="title"
            onClick={() => toggleExpand("structural-variants")}
          >
            Visualizing Structural Variants in the Humane Genome
          </div>
          <div className="sub-heading">
            Behzod Mirpochoev, Kit Lewers, Aaron Clauset
          </div>
          {expandedProjects["structural-variants"] && (
            <div className="text">
              Structural variants (SVs) are alterations in the DNA involving
              segments longer than a single nucleotide, typically exceeding 100
              base pairs. They result from insertions, deletions, duplications,
              inversions, and translocations in the DNA sequence. These
              mutations can significantly impact gene expression, genetic
              diversity, and disease susceptibility. Notably, singletons–SVs
              observed only once within a population–are particularly
              significant as they represent rare or novel variants. Identifying
              singletons and uncommon SVs not only offers insights into the
              diversity of SVs within certain DNA regions but can also inform
              the prevalence of rare and severe diseases, affecting mortality or
              reproductive functions. Therefore, accurately determining the
              number of SVs within a DNA reading frame is crucial for
              understanding their biological consequences. Gaussian mixture
              models (GMMs) provide a probabilistic framework to model the
              distribution of sequence variation, enabling the estimation of the
              number of SVs and their distributions. While statistical methods
              like GMMs may not be flawless, they are made more powerful by
              combining methods of k-means clustering and
              expectation-maximization to better inform the GMMs, providing a
              systematic approach to make sense of noisy genetic data. These
              methods contribute to advancing our understanding of structural
              variants and their role in shaping the genome, with potential
              applications in disease diagnosis and treatment.
            </div>
          )}
          <img src={SVGif} alt="Gaussian Mixture Model" />
        </div>
        <div className="project">
          <div className="title" onClick={() => toggleExpand("tau")}>
            Modeling Tau Spread Across a Neuronal Network
          </div>
          <div className="sub-heading">
            Grace Bowman, Chanin Kumpeerakij, Roy Parker, Dan Larremore, Meaghan
            Van Alstyne
          </div>
          {expandedProjects["tau"] && (
            <div className="text">
              Tau is a protein in the brain essential for neuronal functioning.
              In a healthy brain, it stabilizes neuronal microtubules and
              facilitates nutrient transport and communication. Tau is not an
              inherently bad protein; however, it can misfold and aggregate in
              ways that prevent normal brain functioning, eventually leading to
              potential neurodegenerative diseases such as Alzheimer’s Disease
              (AD). Though a healthy person’s neurons are able to clear their
              own waste material, including the misfolded tau, these clearance
              mechanisms worsen with aging and following traumatic brain
              injuries, allowing the misfolded tau to aggregate and impact
              neuron function. While the spread of tau pathology has been
              likened to a network process, the exact role of neuronal networks
              in this propagation remains unclear. Due to this uncertainty, the
              effects of existing interventions for AD have been variable and
              unpredictable. We studied the mechanisms driving tau spread and
              the efficacy of different interventions from a network
              perspective. We constructed a neuronal network model that mimics
              the hubs and small-world features known to define the brain
              network. We then simulated the propagation of tau and two possible
              interventions: the AntiSense Oligonucleotide (ASO) and the
              potential delivery of a transgene intervention.
            </div>
          )}
        </div>
        <div className="project">
          <div className="title" onClick={() => toggleExpand("social-evo")}>
            Modeling the Evolution of Social Foraging Behavior
          </div>
          <div className="sub-heading">Mike Gil</div>
          {expandedProjects["social-evo"] && (
            <div className="text">
              Organisms are constantly producing information through active
              signals and passive cues. Making sense of social information can
              improve individual decision-making, whether it involves finding
              better foraging sites or effectively identifying and evading
              predators. Yet, the continuous reliance on social information in
              the environment also poses the risk of spreading misinformation.
              Jumpiness, social faith, and density dependence in sociality are
              three traits used to model social behavior within foraging
              populations, influencing individual tendencies to flee and how
              they react to other individuals in a group. We created a
              generalizable agent-based model designed to predict the evolution
              of social traits in populations under predation pressure.
              Individuals, with a certain probability, made decisions between
              fleeing and foraging in the presence or absence of predators. At
              the end of each generation, individuals reproduced relative to
              their fitness, simulating the effects of natural selection within
              the population. Our aim was to analyze how sociality evolves in
              social foraging groups and evaluate the consistency of social
              evolution across varying environmental contexts.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Research;
