const fs = require('fs');
const path = require('path');

const filesToDelete = [
    'src/components/RatingsReviews.js',
    'src/components/RatingsReviews.css',
    'src/components/CategoryBabyProducts.js',
    'src/components/CategoryBooksStationery.js',
    'src/components/CategoryEventSuppliers.js',
    'src/components/CategoryFashionClothing.js',
    'src/components/CategoryFurniture.js',
    'src/components/CategoryGadgetsElectronics.js',
    'src/components/CategoryHomeAppliances.js',
    'src/components/CategoryItems.css',
    'src/components/CategoryItems.js',
    'src/components/CategoryToolsEquipment.js',
    'src/components/CategoryTravelLuggage.js'
];

filesToDelete.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
        try {
            fs.unlinkSync(fullPath);
            console.log(`Deleted: ${file}`);
        } catch (err) {
            console.error(`Error deleting ${file}: ${err.message}`);
        }
    } else {
        console.log(`File not found, skipping: ${file}`);
    }
});
