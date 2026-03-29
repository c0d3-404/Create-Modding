StartupEvents.registry('item', event => {
  // Core progression items
  event.create('arcane_alloy_ingot').displayName('Arcane Alloy Ingot').glow(true)
  event.create('compressed_source_mass').displayName('Compressed Source Mass').glow(true)
  event.create('arcane_flux_core').displayName('Arcane Flux Core').glow(true)
  event.create('singularity_fragment').displayName('Singularity Fragment').glow(true)
  event.create('hybrid_catalyst_piece').displayName('Hybrid Catalyst Piece').glow(true)
  event.create('singular_essence').displayName('Singular Essence').glow(true)

  event.create('uncharged_singularity_catalyst')
    .displayName('Uncharged Singularity Catalyst')
    .glow(true)
    .maxStackSize(16)

  event.create('charged_singularity_catalyst')
    .displayName('Charged Singularity Catalyst')
    .glow(true)
    .maxStackSize(16)

  event.create('arcane_singularity')
    .displayName('Arcane Singularity')
    .glow(true)
    .maxStackSize(1)

  // Bridge items for cross-mod gating
  event.create('mechanomantic_core').displayName('Mechanomantic Core').glow(true)
  event.create('resonant_storage_core').displayName('Resonant Storage Core').glow(true)
  event.create('charged_archengine_frame').displayName('Charged Archengine Frame').glow(true)
  event.create('singularity_scaffold').displayName('Singularity Scaffold').glow(true)
  event.create('energized_mechanism').displayName('Energized Mechanism').glow(true)

  // Postgame
  event.create('creative_source_matrix')
    .displayName('Creative Source Matrix')
    .glow(true)
    .maxStackSize(1)

  // Transitional items
  event.create('incomplete_infused_precision_mechanism')
    .displayName('Incomplete Infused Precision Mechanism')

  event.create('incomplete_hybrid_catalyst_piece')
    .displayName('Incomplete Hybrid Catalyst Piece')
})
