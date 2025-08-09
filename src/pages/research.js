import React, { useState } from "react";
import EcoNetworkImg from "../images/deelab.png";
import SVGif from "../images/sv.gif";

const Research = () => {
  const [expandedProjects, setExpandedProjects] = useState({
    "species-interactions": true,
    "structural-variants": true,
    tau: true,
    "social-evo": true,
  });

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
            Modeling the Dynamics of Multiple Species Interactions
          </div>
          <div className="sub-heading">
            presented at ESA Annual Meeting 2025
          </div>
          <div className="sub-heading">
            w/ Henry Li, Luis de Pablo, Allison Barner, Laura Dee, Aaron Clauset
          </div>
          {expandedProjects["species-interactions"] && (
            <div className="text">
              Studying the intricate relationships among species within
              ecosystems offers valuable insights into the mechanisms driving
              ecological dynamics. Dynamic systems models, such as the
              Lotka-Volterra equations and the allometric trophic network (ATN)
              model, are commonly used to simulate species interactions and
              predict ecosystem change over time. However, these models often
              overlook essential non-trophic (non-feeding) interactions, such as
              recruitment facilitation and refuge provisioning, which can
              significantly influence species persistence and community
              structure. In this project, we illustrate the challenges in
              incorporating non-trophic interactions into dynamic ecosystem
              models. We then identify a framework to reduce the uncertainties
              that arise in parameter estimation and model structure in order to
              constrain an ensemble of ecosystem models. Through these
              ensembles, we aim to enhance improve predictions of ecosystem
              response to management actions in order to inform better
              conservation and restoration strategies.
            </div>
          )}
          {/* <img src={EcoNetworkImg} alt="Ecological Network" /> */}
        </div>
        <div className="project">
          <div
            className="title"
            onClick={() => toggleExpand("structural-variants")}
          >
            Visualizing Structural Variants in the Humane Genome
          </div>
          <div className="sub-heading">
            w/ Muhrad Chowdhury, Ryan Layer, Aaron Clauset
          </div>
          {expandedProjects["structural-variants"] && (
            <div className="text">
              Structural variants (SVs) are large-scale rearrangements in the
              genome that are associated with a wide range of Mendelian
              disorders, cancers, and complex diseases. Correctly identifying
              SVs and characterizing their allele frequencies is a necessary
              step to understand their impact on such diseases. However,
              existing methods for comparing SVs aim to reduce false positives,
              resulting in over-merging and extensive filtering of potential
              real SVs. In this project, we introduce an unsupervised machine
              learning method that can distinguish closely located SVs based on
              statistical evidence from short-read sequencing data. We applied
              our method to the 1000 Genomes Project dataset to identify
              previously undetected SVs and characterize their allele
              frequencies and distribution by population haplotype.
            </div>
          )}
          {/* <img src={SVGif} alt="Gaussian Mixture Model" /> */}
        </div>
        <div className="project">
          <div className="title" onClick={() => toggleExpand("tau")}>
            Modeling Tau Spread Across a Neuronal Network
          </div>
          <div className="sub-heading">
            w/ Grace Bowman, Chanin Kumpeerakij, Roy Parker, Dan Larremore
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
          <div className="sub-heading">w/ Mike Gil</div>
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
