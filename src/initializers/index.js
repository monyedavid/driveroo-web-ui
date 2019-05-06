export const createMerchantState = {
  bannerImage: '', // file
  name: '',
  email: '',
  phone: '',
  ngo: false,
  ngoPhoneNumber: '',
  tagLine: '',
  logo: '', // file
  location: '',
  bank_name: '',
  bank_account_number: '',
  bank_account_name: '',
  summary: '',
  thankYouMessage: '',
  website: '',
};

// from existing ui form
export const createMovieState = {
  name: '',
  category: 'CINEMA',
  ageRestriction: '',
  genre: '',
  director: '',

  duration: '', // runnig time

  summary: '', //description

  featured: '', // starring
  featured_check: false,
  image_check: false,

  artwork: '', // synopis image
  cardImage: '',
  bannerImage: '',
  featuredImage: '',
  synopsisImage: '',

  // NOT IN THE UI
  available: 0, // done
  purchaseCount: 0,
  vid: '',
  number_of_views: 0,
  filmhouse_id: '',

  // from UI
  youtube_trailer: '',
};

export const createGiftState = {
  movie: '',
  cinema: '',
  date: '',
  time: '',
  winners_name: '',
  winners_email: '',
  winners_email: '',
  winners_phone: '',
  quantity: '',
};

export const addShowTIme = {
  uid: '', // cinema location id??!!
  ticketID: '',

  cinema: '',

  // for classess
  class: '',
  price: '',

  date: '', // for show times
  time: '', // for show times

  limit: '',
  available: 0,
};
