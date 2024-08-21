package randomizer;

public class Baron_Samedi extends godClass{ 
    public Baron_Samedi() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Baron_Samedi test = new Baron_Samedi();
    System.out.println(test.getDamageType());
    }
}
