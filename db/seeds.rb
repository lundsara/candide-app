
data = [
  {
    product_number: 1,
    product_name: 'The Birkin Dress',
    product_desc:'Inspired by Jane Birkin from La Piscine',
    unit_quantity: 0,
    retail_price: '$145.00',
    color: 'blue',
    discount: 0,
    units_in_stock: 0,
    product_available: false,
    image_teaser:'https://i.imgur.com/HmVzkSa.jpg',
    image_1:'https://i.imgur.com/rYQXzEk.jpg',
    image_2:'https://i.imgur.com/8HwGr4q.jpg',
    care_instructions:'Machine-Wash in Cold, Hang Dry'
  },
  {
    product_number: 2,
    product_name: 'The Karina Dress',
    product_desc:'Inspired by Ana Karina in Une femme est une femme',
    unit_quantity: 0,
    retail_price: '$145.00',
    color: 'red',
    discount: 0,
    units_in_stock: 0,
    product_available: false,
    image_teaser:'https://i.pinimg.com/736x/43/42/f4/4342f4b75826391553ca6d10089733f1--anna-karina-style-icons.jpg',
    image_1:'https://i.imgur.com/pNw8Y94.jpg',
    image_2: 'https://i.imgur.com/MGOWhWj.jpg',
    care_instructions:'Machine-Wash in Cold, Hang Dry'
  },
  {
    product_number: 3,
    product_name: 'The Loren Dress',
    product_desc:'Inspired by effervescent Sophia Loren',
    unit_quantity: 0,
    retail_price: '$145.00',
    color: 'white',
    discount: 0,
    units_in_stock: 0,
    product_available: false,
    image_teaser:'https://i.pinimg.com/736x/20/c6/1d/20c61db96782495cee5ddc2d88f12dab--sofia-loren-super-women.jpg',
    image_1:'https://i.imgur.com/cG4LvVb.jpg',
    image_2: 'https://i.imgur.com/cG4LvVb.jpg',
    care_instructions:'Machine-Wash in Cold, Hang Dry'
  },
{
    product_number: 4,
    product_name: 'The Loren Blouse',
    product_desc:'Inspired by the effervescent Sophia Loren',
    unit_quantity: 0,
    retail_price: '$105.00',
    color: 'white',
    discount: 0,
    units_in_stock: 0,
    product_available: false,
    image_teaser:'https://hips.hearstapps.com/hbz.h-cdn.co/assets/cm/15/03/54bc1ecec0311_-_hbz-sophia-loren-20-1964-rexusa-210677bq-xl.jpg',
    image_1:'https://i.imgur.com/cG4LvVb.jpg',
    image_2:'https://i.imgur.com/cG4LvVb.jpg',
    care_instructions:'Machine-Wash in Cold, Hang Dry'
  }

]

data.each do |product_data|
  Product.create(product_data)
end
