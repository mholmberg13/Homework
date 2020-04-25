
# class Player 
#     def initialize name
#         @name = name
#         @bankroll = 100
#         @hand = []
#     end
#     def name
#         @name
#     end
#     def bankroll
#         @bankroll  
#     end
#     def hand 
#         @hand
#     end

# end

# class the_house
#     def initialize name
#         @name = name
#         @bankroll = 1000
#         @hand = []
#     end
#     def name
#         @name  
#     end
#     def bankroll
#         @bankroll
#     end
#     def hand
#         @hand
#     end

# end
class Deck 
    def initialize
        cards = []
    end

    def make_deck 
        hearts = []
        diamonds = []
        spades = []
        clubs = []
        for i in 1...5 do
            if i == 1
                suit = hearts
                suitname = "hearts"
            elsif i == 2
                suit = diamonds
                suitname = "diamonds"
            elsif i == 3
                suit = spades
                suitname = "spades"
            elsif i == 4
                suit = clubs
                suitname = "clubs"
            end
            for n in 1...14 do
                if n == 1
                    suit.push("ace of #{suitname}")
                elsif n == 11
                    suit.push("jack of #{suitname}")
                elsif n == 12
                    suit.push("queen of #{suitname}")
                elsif n == 13
                    suit.push("king of #{suitname}")
                else
                    suit.push("#{n} of #{suitname}")
                end
            end
        end
        
    end
    make_deck()
    cards.push(hearts, diamonds, spades, clubs)
    p deck
end

deck1 = Deck.new
p deck1




