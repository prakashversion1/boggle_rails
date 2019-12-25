class CreateWords < ActiveRecord::Migration[6.0]
  def change
    create_table :words do |t|
      t.string :name, :presence => true
      t.timestamps
    end
  end
end
