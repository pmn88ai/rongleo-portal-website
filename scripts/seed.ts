import { createClient } from '@supabase/supabase-js'
import seedData from '../src/data/seed.json'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

async function seed() {
  console.log('Clearing old portal_items...')
  await supabase
    .from('portal_items')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000')

  console.log('Seeding portal_items...')
  const { data, error } = await supabase
    .from('portal_items')
    .upsert(seedData, { onConflict: 'slug' })
  if (error) { console.error(error); process.exit(1) }
  console.log(`Seeded ${seedData.length} items.`)
}

seed()
