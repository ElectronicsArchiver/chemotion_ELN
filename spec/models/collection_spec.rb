require 'rails_helper'

RSpec.describe Collection, type: :model do
  describe 'creation' do
    let(:collection) { create(:collection) }

    it 'is possible to create a valid collection' do
      expect(collection.valid?).to be(true)
    end
  end

  describe 'scopes' do
    let(:collection_1) { create(:collection, is_shared: false) }
    let(:collection_2) { create(:collection, is_shared: true) }

    describe 'shared scope' do
      it 'returns shared collections' do
        expect(Collection.shared).to match_array [collection_2]
      end
    end

    describe 'unshared scope' do
      it 'returns unshared collections' do
        expect(Collection.unshared).to match_array [collection_1]
      end
    end
  end
end
