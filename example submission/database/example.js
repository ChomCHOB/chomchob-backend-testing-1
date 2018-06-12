const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  
  // some config

});

const Item = sequelize.define('Item_tb', {
  itemId: {
    type: Sequelize.UUID,
    primaryKey: true,
    field: 'item_id'
  },
  itemName: {
    type: Sequelize.STRING,
    field: 'item_name'
  },
  itemDescription: {
    type: Sequelize.STRING,
    field: 'item_description'
  },
  itemPrice: {
    type: Sequelize.INTEGER,
    field: 'item_price'
  },
  startSellingDate: {
    type: Sequelize.DATE,
    field: 'start_selling_date'
  },
  endSellingDate: {
    type: Sequelize.DATE,
    field: 'end_selling_date'
  }
},{
  classMethods: {
    associate: models => {
      Item.hasOne(models.Promotion, { foreignKey: 'item_id' })
      Item.hasMany(models.PurchaseOrderItem, { foreignKey: 'item_id' })
      Item.hasMany(models.BundleItem, {foreignKey: 'item_id'});
    }
  }
})

const Promotion = sequelize.define('Promotion_tb', {
  promotionId: {
    type: Sequelize.UUID,
    primaryKey: true,
    field: 'promotion_id'
  },
  itemId: {
    type: Sequelize.UUID,
    field: 'item_id'
  },
  promotionName: {
    type: Sequelize.STRING,
    field: 'promotion_name'
  },
  promotionPrice: {
    type: Sequelize.INTEGER,
    field: 'promotion_price'
  },
  startPromotionDate: {
    type: Sequelize.DATE,
    field: 'start_promotion_date'
  },
  endPromotionDate: {
    type: Sequelize.DATE,
    field: 'end_promotion_date'
  }
},{
  classMethods: {
    associate: models => {
      Promotion.hasMany(models.PurchaseOrderItem, { foreignKey: 'promotion_id' })
      Promotion.belongsTo(models.Item, {foreignKey: 'item_id'});
    }
  }
})

const Bundle = sequelize.define('Bundle_tb', {
  bundleId: {
    type: Sequelize.UUID,
    primaryKey: true,
    field: 'bundle_id'
  },
  bundleName: {
    type: Sequelize.STRING,
    field: 'bundleName'
  },
  bundlePrice: {
    type: Sequelize.INTEGER,
    field: 'bundle_price'
  },
  startBundleDate: {
    type: Sequelize.DATE,
    field: 'start_bundle_date'
  },
  endBundleDate: {
    type: Sequelize.DATE,
    field: 'end_bundle_date'
  }
},{
  classMethods: {
    associate: models => {
      Bundle.hasMany(models.BundleItem, { foreignKey: 'bundle_id' })
      Bundle.hasMany(models.PurchaseOrderItem, { foreignKey: 'bundle_id' })
    }
  }
})

const BundleItem = sequelize.define('Bundle_item_tb', {
  bundleId: {
    type: Sequelize.UUID,
    primaryKey: true,
    field: 'bundle_id'
  },
  itemId: {
    type: Sequelize.UUID,
    primaryKey: true,
    field: 'item_id'
  },
  itemAmount: {
    type: Sequelize.INTEGER,
    field: 'item_amount'
  }
},{
  classMethods: {
    associate: models => {
      BundleItem.belongsTo(models.Bundle, { foreignKey: 'bundle_id' })
      BundleItem.belongsTo(models.Item, { foreignKey: 'item_id' })
    }
  }
})

const PurchaseOrder = sequelize.define('Purchase_order_tb', {
  purchaseId: {
    type: Sequelize.UUID,
    primaryKey: true,
    field: 'purchase_id'
  },
  purchaseCode: {
    type: Sequelize.STRING,
    field: 'purchase_code'
  },
  totalPrice: {
    type: Sequelize.INTEGER,
    field: 'total_price'
  },
  purchaseDate: {
    type: Sequelize.DATE,
    field: 'purchase_date'
  }
},{
  classMethods: {
    associate: models => {
      PurchaseOrder.hasOne(models.PurchaseOrderItem, { foreignKey: 'purchase_id' })
    }
  }
})

const PurchaseOrderItem = sequelize.define('Purchase_order_item_tb', {
  purchaseId: {
    type: Sequelize.UUID,
    primaryKey: true,
    field: 'purchase_id'
  },
  itemId: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: true,
    field: 'item_id'
  },
  bundleId: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: true,
    field: 'bundle_id'
  },
  promotionId: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: true,
    field: 'promotion_id'
  },
  amount: {
    type: Sequelize.INTEGER,
    field: 'amount'
  },
  price: {
    type: Sequelize.INTEGER,
    field: 'price'
  }
},{
  classMethods: {
    associate: models => {
      PurchaseOrderItem.belongsTo(models.PurchaseOrder, { foreignKey: 'purchase_id' })
      PurchaseOrderItem.belongsTo(models.Item, { foreignKey: 'item_id' })
      PurchaseOrderItem.belongsTo(models.Bundle, { foreignKey: 'bundle_id' })
      PurchaseOrderItem.belongsTo(models.Promotion, { foreignKey: 'promotion_id' })
    }
  }
})