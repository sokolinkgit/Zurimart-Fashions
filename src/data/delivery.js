export const DELIVERY_ZONES = [
  {
    region: 'Nairobi County & Immediate Suburbs',
    towns: ['Kawangware', 'Westlands', 'Kilimani', 'Nairobi CBD', 'Kasarani', 'Roysambu', 'Thika Road', 'Ngong Road', 'Rongai', 'Eastlands'],
    rate: 250,
    time: 'Same Day Delivery (2 - 5 Hours via Motorbike Courier)',
    freeThreshold: 7000,
    method: 'Direct Motorbike Dispatch & Doorstep Delivery'
  },
  {
    region: 'Murang’a County & Central Corridor',
    towns: ['Murang’a Town', 'Kenol', 'Maragua', 'Kangema', 'Kirwara', 'Kiriaini', 'Thika'],
    rate: 200,
    time: 'Same Day Delivery / 3 - 6 Hours',
    freeThreshold: 6000,
    method: 'Local Store Dispatch & 2NK / Matatu Sacco Express'
  },
  {
    region: 'Central Kenya & Mt. Kenya',
    towns: ['Nyeri', 'Kiambu', 'Karatina', 'Kirinyaga / Kerugoya', 'Embu', 'Meru', 'Nyandarua / Ol Kalou'],
    rate: 300,
    time: 'Next Day Morning (Within 24 Hours)',
    freeThreshold: 8000,
    method: '2NK Sacco, 4NTE, G4S Courier'
  },
  {
    region: 'Rift Valley & South Rift',
    towns: ['Nakuru', 'Naivasha', 'Eldoret', 'Kitale', 'Kericho', 'Narok', 'Bomet'],
    rate: 350,
    time: 'Next Day Delivery (Within 24 Hours)',
    freeThreshold: 8000,
    method: 'Easy Coach, Wells Fargo, North Rift Shuttle'
  },
  {
    region: 'Western & Nyanza Kenya',
    towns: ['Kisumu', 'Kakamega', 'Kisii', 'Bungoma', 'Busia', 'Homa Bay', 'Migori'],
    rate: 400,
    time: 'Next Day Delivery (24 Hours)',
    freeThreshold: 9000,
    method: 'Easy Coach, Guardian Courier, Fargo Express'
  },
  {
    region: 'Coast Region',
    towns: ['Mombasa', 'Kilifi', 'Malindi', 'Diani / Kwale', 'Voi', 'Lamu'],
    rate: 400,
    time: 'Next Day Delivery (24 - 36 Hours)',
    freeThreshold: 9000,
    method: 'Modern Coast, Tahmeed Courier, G4S Kenya'
  },
  {
    region: 'Eastern & Northern Kenya',
    towns: ['Machakos', 'Kitui', 'Makueni', 'Isiolo', 'Marsabit', 'Garissa', 'Lodwar'],
    rate: 450,
    time: '24 - 48 Hours',
    freeThreshold: 10000,
    method: 'G4S Kenya, Wells Fargo, Postal Speedpost'
  }
];

export const KENYA_COUNTIES = [
  'Nairobi', 'Murang’a', 'Kiambu', 'Mombasa', 'Nakuru', 'Uasin Gishu (Eldoret)',
  'Kisumu', 'Machakos', 'Nyeri', 'Kirinyaga', 'Embu', 'Meru', 'Kilifi',
  'Kajiado', 'Kakamega', 'Kisii', 'Kericho', 'Trans Nzoia (Kitale)', 'Laikipia',
  'Nyandarua', 'Bomet', 'Bungoma', 'Busia', 'Homa Bay', 'Migori', 'Kwale',
  'Taita Taveta', 'Makueni', 'Kitui', 'Isiolo', 'Garissa', 'Turkana'
];

export const COURIER_PARTNERS = [
  { name: 'G4S Courier Kenya', type: 'Countrywide Door & Office Pickup' },
  { name: 'Wells Fargo Courier', type: 'Secure Countrywide Parcel Dispatch' },
  { name: 'Easy Coach Parcel Service', type: 'Rift Valley & Western Express' },
  { name: '2NK & 4NTE Sacco', type: 'Same-Day / Overnight Central Kenya' },
  { name: 'Nairobi & Murang’a Riders', type: 'Door-to-Door Same Day Delivery' }
];
