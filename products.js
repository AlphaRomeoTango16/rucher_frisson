import Pollen1 from './assets/images/products/pollen/rucher_frisson_pollen1.jpg'
import Pollen2 from './assets/images/products/pollen/rucher_frisson_pollen2.jpg'
import MielEte1 from './assets/images/products/mielEte/rucher_frisson_mielEte1.jpg'
import MielEte2 from './assets/images/products/mielEte/rucher_frisson_mielEte2.jpg'

const products = [
        {
            'id': '1',
            'name': 'Pollen',
            'category': 'Pollen',
            'images': [
                {   
                    'src': Pollen1,
                    'description': 'Trois pots de pollen Rucher Frisson.'
                },
                {   
                    'src': Pollen2,
                    'description': 'Pollen Rucher Frisson.'
                },
            ],
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'price': 10.00
        },
        {   
            'id': '2',
            'name': 'Miel d‘été',
            'category': 'Miel',
            'images': [
                {   
                    'src': MielEte1,
                    'description': 'Pot de miel d‘été du Rucher Frisson.'
                },
                {   
                    'src': MielEte2,
                    'description': 'Rûches Rucher Frisson.'
                }
            ],
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'price': 10.00
        },
        {   
            'id': '3',
            'name': 'Miel de printemps',
            'category': 'Miel',
            'images': [
                {   
                    'src': MielEte1,
                    'description': 'Pot de miel d‘été du Rucher Frisson.'
                },
                {   
                    'src': MielEte2,
                    'description': 'Rûches Rucher Frisson.'
                }
            ],
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'price': 10.00
        }
]

export default products