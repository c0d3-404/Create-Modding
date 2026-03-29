ServerEvents.recipes(event => {
  // Real postgame rewards from installed mods where possible

  event.remove({ output: 'create:creative_motor' })
  event.recipes.createMechanicalCrafting(
    'create:creative_motor',
    [
      'AACNCAA',
      'ACOXOCA',
      'COPEPOC',
      'NXEMEXN',
      'COPEPOC',
      'ACOXOCA',
      'AACNCAA'
    ],
    {
      A: 'kubejs:arcane_alloy_ingot',
      C: 'kubejs:charged_singularity_catalyst',
      O: 'kubejs:singular_essence',
      X: 'kubejs:hybrid_catalyst_piece',
      P: 'create:precision_mechanism',
      E: 'kubejs:arcane_flux_core',
      M: 'kubejs:arcane_singularity',
      N: 'minecraft:nether_star'
    }
  )

  // These ids depend on exact mod version. If JEI shows different ids, swap them.
  event.remove({ output: 'sophisticatedstorage:survival_infinity_upgrade' })
  event.recipes.createMechanicalCrafting(
    'sophisticatedstorage:survival_infinity_upgrade',
    [
      'AACCCAA',
      'ACOSOCA',
      'COSGSOC',
      'CSGNGSC',
      'COSGSOC',
      'ACOSOCA',
      'AACCCAA'
    ],
    {
      A: 'kubejs:arcane_alloy_ingot',
      C: 'kubejs:charged_singularity_catalyst',
      O: 'kubejs:singular_essence',
      S: 'kubejs:resonant_storage_core',
      G: 'minecraft:nether_star',
      N: 'kubejs:arcane_singularity'
    }
  )

  event.remove({ output: 'sophisticatedbackpacks:survival_infinity_upgrade' })
  event.recipes.createMechanicalCrafting(
    'sophisticatedbackpacks:survival_infinity_upgrade',
    [
      'AACCCAA',
      'ACOSOCA',
      'COSBSOC',
      'CSGNGSC',
      'COSBSOC',
      'ACOSOCA',
      'AACCCAA'
    ],
    {
      A: 'kubejs:arcane_alloy_ingot',
      C: 'kubejs:charged_singularity_catalyst',
      O: 'kubejs:singular_essence',
      S: 'sophisticatedbackpacks:backpack',
      B: 'kubejs:resonant_storage_core',
      G: 'minecraft:nether_star',
      N: 'kubejs:arcane_singularity'
    }
  )

  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      'kubejs:compressed_source_mass',
      'kubejs:compressed_source_mass',
      'kubejs:compressed_source_mass',
      'kubejs:compressed_source_mass',
      'ars_nouveau:source_gem_block',
      'ars_nouveau:source_gem_block',
      'kubejs:charged_singularity_catalyst',
      'kubejs:charged_singularity_catalyst'
    ],
    'kubejs:arcane_singularity',
    'kubejs:creative_source_matrix',
    10000
  )
})
